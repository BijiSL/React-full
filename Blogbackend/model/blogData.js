const mongoose=require('mongoose');
const BlogSchema=mongoose.Schema({
title:String,
image:String,
description:String
});

const BlogData=mongoose.model('blogdata',BlogSchema);
module.exports=BlogData;