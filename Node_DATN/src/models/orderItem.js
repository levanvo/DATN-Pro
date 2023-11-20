import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    code_order: String, // mã đơn hàng
    cartId: [{
        type: Number
    }],
    products: [
        {
          productName: String,
          imgUrl: String,
          quantity: Number,
          price: Number,
          color: String,
          size: Number
        }
      ],
    name: String,
    phone:String,
    note: String,
    status: {
        type: Boolean,
        default: false
    },

    address: {
        city: String, // tỉnh/thành phố
        location: String, // địa chỉ
        district: String // quận/huyện
    },
    totalPrice : Number,

}, { timestamps: true, versionKey: false });

export default mongoose.model("OrderItem", orderItemSchema);