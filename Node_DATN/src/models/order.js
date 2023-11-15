import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    cartId: [{
        type: mongoose.Types.ObjectId,
        ref: "Cart"
    }],
    productId: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],
    // code_order: String,
    phone:String,
    note: String,
    status: {
        type: Boolean,
        default: false
    },

    // discount:String,

    quantity : Number,
    address: {
        city: String, // tỉnh/thành phố
        location: String, // địa chỉ
        district: String // quận/huyện
    },
    totalPrice : Number,

}, { timestamps: true, versionKey: false });

export default mongoose.model("Order", orderSchema);