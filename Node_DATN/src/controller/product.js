import Product from "../models/product.js"
import Category from "../models/category.js"
import DeletedProduct from "../models/deletedData.js"
import { productSchema } from "../schema/product.js"
import mongoose from "mongoose"
import Color from "../models/color.js"
import Size from "../models/size.js"

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find().sort({ createdAt: -1 }).exec();
    if(data.length===0){
      return res.status(400).json({
        message: "Không có sản phẩm nào"
      })
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const readProduct = async (req, res) => {
  try {
    const data = await Product.findById({ _id: req.params.id })
      .populate(["categoryId", "size_id", "color_id"])
      .exec()

    if (!data) {
      return res.status(400).json({
        message: "Không có sản phẩm nào",
      })
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: error.message
    })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      })
    }
    const newProduct = await Product.create(req.body)
    if (!newProduct) {
      return res.json({
        message: "Không thêm sản phẩm",
      })
    }
    const updateInfo = {
      products: newProduct._id,
    };
    await Promise.all([
      Category.findByIdAndUpdate(newProduct.categoryId, { $addToSet: updateInfo }),
      Color.findByIdAndUpdate(newProduct.color_id, { $addToSet: updateInfo }),
      Size.findByIdAndUpdate(newProduct.size_id, { $addToSet: updateInfo }),
    ]);
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: newProduct,
    })
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm cần xóa",
      })
    }

    const productToBeDeleted = await Product.findById(req.params.id).exec();
    if (!productToBeDeleted) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại trong database",
      });
    }

    // Tạo một bản sao của sản phẩm trước khi xóa nó tạm thời
    const deletedProduct = new DeletedProduct(productToBeDeleted.toJSON());

    // Lưu sản phẩm đã xóa vào bảng "deleted_products"
    await deletedProduct.save();

    // Sau đó, xóa sản phẩm khỏi bảng "Product"
    await Product.findByIdAndRemove(req.params.id).exec();

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
    
    // Tìm sản phẩm trong bảng "deleted_products"
    const deletedProduct = await DeletedProduct.findById(id).exec();

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm cần khôi phục",
      });
    }

    // Tạo một bản sao của sản phẩm đã xóa
    const restoredProduct = new Product(deletedProduct.toJSON());

    // Lưu sản phẩm đã khôi phục vào bảng "Product"
    await restoredProduct.save();

    // Xóa sản phẩm đã khôi phục khỏi bảng "deleted_products"
    await DeletedProduct.findByIdAndRemove(id).exec();

    return res.status(200).json({
      message: "Khôi phục sản phẩm thành công",
      productRestored: restoredProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

