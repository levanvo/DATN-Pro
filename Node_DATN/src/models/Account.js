import mongoose from "mongoose";

const Model_Account = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        tel:{
            type:String||Number,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        car_ID:{
            type:mongoose.Types.ObjectId,
            ref:"car",
        },
        purchase_history_ID:{
            type:mongoose.Types.ObjectId,
            ref:"purchase_history",
        },
        role_ID:{
            type:mongoose.Types.ObjectId,
            ref:"role_account",
        },
    },{
        tiemwTamps:true,
        versionKey:false,
    }
);

export default mongoose.model('account',Model_Account);