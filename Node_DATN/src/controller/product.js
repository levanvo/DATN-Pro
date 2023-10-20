import Product from "../models/product.js"
import Category from "../models/category.js"
import { productSchema } from "../schema/product.js"
import mongoose from "mongoose"
import Color from "../models/color.js"
import Size from "../models/size.js"

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find()
    if(data.length===0){
      return res.status(400).json({
        message: "Không có sản phẩm nào"
      })
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: "Không lấy được danh sách sản phẩm",
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

    const data = await Product.findByIdAndRemove({ _id: req.params.id }).exec()
    if (!data) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại trong database",
      })
    }

    return res.status(200).json({
      message: "Xoá sản phẩm thành công",
      productRemoved: data,
    })
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    })
  }
}

export const deleteSelectedProducts = async (req, res) => {
  try {
    const { productIds } = req.body; // Tham số productIds chứa danh sách ID của các sản phẩm cần xóa
    
    // Sử dụng một vòng lặp hoặc phương thức để xóa các sản phẩm theo danh sách ID.
    const result = await Product.deleteMany({ _id: { $in: productIds } });
    
    if (result.deletedCount === 0) {
      return res.status(400).json({
        message: 'Không tìm thấy sản phẩm cần xóa',
      });
    }
    
    return res.status(200).json({
      message: 'Xóa sản phẩm đã chọn thành công',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


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
