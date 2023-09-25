import product from "../models/product.js"
import Category from "../models/category.js"
import { productSchema } from "../schema/product.js"
import Size from "../models/size.js"
import Color from "../models/color.js"

export const getProduct = async (req, res) => {
  try {
    const data = await product.find()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: "Không lấy được danh sách sản phẩm",
    })
  }
}

export const readProduct = async (req, res) => {
  try {
    const data = await product
      .findById({ _id: req.params.id })
      .populate(["categoryId", "size_id", "color_id"])
      .exec()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm",
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
    const newProduct = await new product(req.body).save()
    if (!newProduct) {
      return res.json({
        message: "Không thêm sản phẩm",
      })
    }
    await Category.findByIdAndUpdate(newProduct.categoryId, {
      $addToSet: {
        products: newProduct._id,
      },
    })
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: newProduct,
    })
  } catch {
    return res.status(404).json({
      message: "Không tạo được sản phẩm mới",
    })
  }
}

export const removeProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndRemove({ _id: req.params.id }).exec()
    return res.status(200).json({
      message: "Xoá sản phẩm thành công",
      productRemoved: data,
    })
  } catch (error) {
    return res.status(404).json({
      message: "Không xoá được sản phẩm",
    })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const updateData = await product
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec()
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      productUpdated: updateData,
    })
  } catch (error) {
    return res.status(404).json({
      message: "Không cập nhật được sản phẩm",
    })
  }
}
