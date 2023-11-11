import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    phone:String,
    note:String,
    status:String,
    discount:String,
    methodPayment:String,
    quantity:Number,
    totalPrice:Number,

    address:Object,
    cartID:String
}, { timestamps: true, versionKey: false });

export default mongoose.model("Size", sizeSchema);