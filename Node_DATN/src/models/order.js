import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    phone:String,
    note:String,
    status:String,
    discount:String,
    methodPayment:String,
    quantity:Number,
    totalPrice:Number,

    address:Object,
    userID:String,
    codeID:String,
}, { timestamps: true, versionKey: false });

export default mongoose.model("Order", orderSchema);