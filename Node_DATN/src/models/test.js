import mongoose from "mongoose";

const SchemaTest=mongoose.Schema({
    name:String,
},{timestamps:true,versionKey:false});

export default mongoose.model("test_datn",SchemaTest);