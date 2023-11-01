
import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product"
        },
        quantity: {
          type: Number,
          required: true
        },
        size: {
          type: String
        },
        color: {
          type: String
        }
      }
    ]
  });
  

export default mongoose.model("Cart",cartSchema)