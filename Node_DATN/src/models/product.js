import mongoose, { Schema } from "mongoose"

const productSchema = new mongoose.Schema(
  {
    productDetailsId: {
      type: Schema.Types.ObjectId,
      ref: "ProductDetails"
    },
    name: {
      type: String,
    },
    imgUrl: [
      {
        type: String,
      },
    ],
    
    variants: [
      {
        imgUrl: [
          {
            type: String,
          },
        ],
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
      }
    ],
    categoryId: String,
    price: Number,
    original_price: Number,
    description: String,
    quantity: Number,
    views: {
      type: Number,
      default: 0,
    },
    inventory_number: Number, // số lượng tồn kho
    quantity_sold: Number, // số lượng đã bán
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model("Product", productSchema)
