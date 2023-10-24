
import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
            },
        },
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

export default mongoose.model("Cart",cartSchema)