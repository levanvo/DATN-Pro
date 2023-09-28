import joi from "joi"

export const productSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "Username không được để trống",
    "any.required": "Trường username là bắt buộc",
  }),
  original_price: joi.number().required().messages({
    "number.empty": "Giá gốc không được để trống",
    "any.required": "Trường original_price là bắt buộc",
  }),
  price: joi.number().required().messages({
    "number.empty": "Giá không được để trống",
    "any.required": "Trường price là bắt buộc",
  }),
  description: joi.string().required().messages({
    "string.empty": "Mô tả sản phẩm không được để trống",
    "any.required": "Trường description là bắt buộc",
  }),
  imgUrl: joi.string().required().messages({
    "string.empty": "Ảnh sản phẩm không được để trống",
    "any.required": "Trường imgUrl là bắt buộc",
  }),
  categoryId: joi.string().required().messages({
    "string.empty": "Danh mục không được để trống",
    "any.required": "Trường categoryId là bắt buộc",
  }),
  size_id: joi.string().required().messages({
    "string.empty": "Size không được để trống",
    "any.required": "Trường size_id là bắt buộc",
  }),
  color_id: joi.string().required().messages({
    "string.empty": "Màu không được để trống",
    "any.required": "Trường color là bắt buộc",
  }),
  quantity: joi.number().required().messages({
    "number.empty": "Số lượng sản phẩm không được để trống",
    "any.required": "Trường quantity là bắt buộc",
  }),
  quantity_sold: joi.number().required().messages({
    "number.empty": "Số lượng sản phẩm đã bán không được để trống",
    "any.required": "Trường quantity_sold là bắt buộc",
  }),
  inventory_number: joi.number().required().messages({
    "number.empty": "Số lượng hàng tồn kho không được để trống",
    "any.required": "Trường inventory_number là bắt buộc",
  }),
  discount_code_id: joi.string(),
  poinId: joi.string().required(),
})
