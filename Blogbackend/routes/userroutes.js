const express=require('express');
const router=express.Router();
const UserData=require('../model/userData');
router.use(express.json());

router.post('/l',async(req,res)=>{
    try{
    const user=await UserData.findOne({email:req.body.email});
if(!user){
    res.send('user not found');
}
else
{
     if(user.password==req.body.password){
res.status(200).send('Login successful');
     }
    else{
        res.status(400).send('Invalid Credential');
    }
}
}catch(error){
console.log('error');
    }
})
router.post('/s',async(req,res)=>{
    try{
        const data=req.body;
        await UserData(data).save()
        res.status(200).send({message:"data added"});
    }catch(error){
console.log(error);
    }
})
module.exports=router;
