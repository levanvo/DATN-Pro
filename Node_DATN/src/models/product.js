import mongoose, { Schema } from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  original_price: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  imgUrl: [
    {
        type: String
    }
  ],
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  size_id: {
    type: Schema.Types.ObjectId,
    ref: "Size",
  },
  color_id: {
    type: Schema.Types.ObjectId,
    ref: "Color",
  },
  quantity: {
    type: Number,
  },
  discount_code_id: {
    type: String,
  },
  poinId: {
    type: String,
  },
},{timestamps: true, versionKey: false})

export default mongoose.model("Product", productSchema)
