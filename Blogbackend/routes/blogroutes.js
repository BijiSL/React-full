const express=require('express');
const router=express.Router();
const blogData=require('../model/blogData');
router.use(express.json());
router.post("/add",async(req,res)=>{
    try{
        var item=req.body;
        var data=new blogData(item);
        await data.save();
        res.status(200).send("Data added successfully");
    }catch(error)
    {
        res.status(400).send('Unable to added');
    }
});
router.get("/get",async(req,res)=>{
    try{
        var data=await blogData.find();
        res.status(200).send("All data fetched");
    }catch(error)
    {
        res.status(400).send('Unable to fetch');
    }
});
router.get("/s/del/:id",async(req,res)=>{
    try{
        await blogData.findByIdAndDelete(req.params.id);
        res.status(200).send("Data deleted successfully");
    }catch(error)
    {
        res.status(400).send('Failed to delete data');
    }
});
router.put("/s/edit/:id",async(req,res)=>{
    try{
        await blogData.findByIdAndDelete(req.params.id,req.body);
        res.status(200).send("Data edited successfully");
    }catch(error)
    {
        res.status(400).send('Could not edit data');
    }
});


module.exports=router;