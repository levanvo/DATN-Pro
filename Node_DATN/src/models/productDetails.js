import mongoose, { Schema } from "mongoose"

const productDetailsSchema = new mongoose.Schema({
    productId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        }
    ],
    size_id: {
        type: Schema.Types.ObjectId,
        ref: "Size",
    },
    color_id: {
        type: Schema.Types.ObjectId,
        ref: "Color",
    },
    inventory_number: Number,
    quantity_sold: Number
},{timestamps: true, versionKey: false})

export default mongoose.model("ProductDetails", productDetailsSchema)
