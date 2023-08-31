import mongoose from "mongoose";

const Model_Role_ID=new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        connect_Acount:[{
            type:mongoose.Types.ObjectId,
            ref:"account",
        }],
    },{
        tiemwTamps:true,
        versionKey:false,
    }
);

export default mongose.model('role_account',Model_Role_ID);