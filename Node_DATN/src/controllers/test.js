import SchemaTest from "../models/test";

export const getAll=async (req,res)=>{
    try{
        const data=await SchemaTest.find();
        return res.json({massage:"getALL ok",data});
    }catch(error){
        return res.json({message:"getAll loi"});
    }
}
export const Create=async (req,res)=>{
    try{
        const body=req.body;
        const data=await SchemaTest.create(body);
        return res.json({message:"them mot: ",data});
    }catch(error){
        return res.json({message:"create loi"});
    }
}
export const Remove=async (req,res)=>{
    try{
        const data=await SchemaTest.findByIdAndDelete(req.params.id);
        return res.json({message:"xoa mot: ",data});
    }catch(error){
        return res.json({message:"remove loi"});
    }
}