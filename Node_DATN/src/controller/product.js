import Product from "../models/product.js"
import Category from "../models/category.js"
import DeletedProduct from "../models/deletedData.js"
import { productSchema } from "../schema/product.js"
import mongoose from "mongoose"
import Color from "../models/color.js"
import Size from "../models/size.js"
import Cart from "../models/cart.js"
import ProductDetails from "../models/productDetails.js"

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find().sort({ createdAt: -1 }).exec()
    if (data.length === 0) {
      return res.status(400).json({
        message: "Không có sản phẩm nào",
      })
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const createProductVariant = async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID
    const product = await Product.findById(productId).exec();

    if (!product) {
      return res.status(400).json({
        message: "Không có sản phẩm nào",
      });
    }

    // Assuming you have the variant data in the request body
    const variantData = req.body;

    // Add the variant to the variants array in the product
    product.variants.push(variantData);

    if (variantData.imgUrl && Array.isArray(variantData.imgUrl)) {
  product.imgUrl = product.imgUrl.concat(variantData.imgUrl);
}
    // Save the updated product
    await product.save();

    return res.status(201).json({
      message: "Biến thể sản phẩm đã được thêm thành công",
      product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Đã xảy ra lỗi khi thêm biến thể sản phẩm",
    });
  }
};

export const readProduct = async (req, res) => {
  try {
    const data = await Product.findById({ _id: req.params.id })
    .populate({
      path: 'variants',
      populate: [
        { path: 'size_id', model: 'Size' },
        { path: 'color_id', model: 'Color' }
      ]
    })
      .exec()

    if (!data) {
      return res.status(400).json({
        message: "Không có sản phẩm nào",
      })
    }

     // Tăng lượt truy cập của sản phẩm
     try {
      const product = await Product.findById({ _id: req.params.id }).exec();
      if (product) {
        product.views += 1;
        await product.save();
      }
    } catch (error) {
      console.error(error);
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const createProduct = async (req, res) => {
  try {
  
    const newProduct = await Product.create(req.body)
  

    return res.json({
      message: "Thêm sản phẩm thành công",
      data: newProduct,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};







export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.body)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm cần xóa",
      })
    }

    const productToBeDeleted = await Product.findById(req.params.id).exec()
    if (!productToBeDeleted) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại trong database",
      })
    }

    await Cart.updateMany(
      { "products.productId": productToBeDeleted._id },
      { $pull: { products: { productId: productToBeDeleted._id } } }
    ).exec();
    // Tạo một bản sao của sản phẩm trước khi xóa nó tạm thời
    
    const deletedProduct = new DeletedProduct(productToBeDeleted.toJSON());

    // Lưu sản phẩm đã xóa vào bảng "deleted_products"
    await deletedProduct.save()

    // Sau đó, xóa sản phẩm khỏi bảng "Product"
    await Product.findByIdAndRemove(req.params.id).exec()

    return res.status(200).json({
      message: "Xoá sản phẩm thành công",
      productRemoved: productToBeDeleted,
    })
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm cần cập nhật",
      })
    }

    const updateData = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec()

    if (!updateData) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại trong database",
      })
    }

    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      productUpdated: updateData,
    })
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

// Khôi phục sản phẩm

export const restoreProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Định dạng ID không hợp lệ để khôi phục sản phẩm",
      });
    }

    // Tìm sản phẩm trong bảng "deleted_products"
    const deletedProduct = await DeletedProduct.findById(id).exec()

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm cần khôi phục",
      })
    }

    // Tạo một bản sao của sản phẩm đã xóa
    const restoredProduct = new Product(deletedProduct.toJSON())

    // Lưu sản phẩm đã khôi phục vào bảng "Product"
    await restoredProduct.save()

    // Xóa sản phẩm đã khôi phục khỏi bảng "deleted_products"
    await DeletedProduct.findByIdAndRemove(id).exec()

    return res.status(200).json({
      message: "Khôi phục sản phẩm thành công",
      productRestored: restoredProduct,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
};


// lấy ra tất cả dữ liệu đã xóa
export const getAllDeletedProducts = async (req, res) => {
  try {
    const deletedProducts = await DeletedProduct.find().sort({ createdAt: -1 }).exec();

    if (deletedProducts.length === 0) {
      return res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }

    return res.status(200).json(deletedProducts);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

//Xóa sản phẩm vĩnh viễn
export const deleteProduct = async (req,res) => {
  try {
    const {id} = req.params
    const product = await DeletedProduct.findByIdAndDelete(id)
    if(!product){
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm cần xóa"
      })
    }

    return res.status(200).json({
      message: "Xóa sản phẩm thành công"
    })
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}


//lấy sản phẩm hot
export const getHotProducts = async (req, res) => {
  try {
    const hotProducts = await Product.find()
      .sort({ views: -1 })
      .limit(8)
      .exec();

    if (hotProducts.length === 0) {
      return res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }

    return res.status(200).json(hotProducts);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}