const express=require('express');
const app=new express();
const dotenv=require('dotenv');
const cors=require('cors');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
const userRoutes=require('./routes/userroutes');
const blogRoutes=require('./routes/blogroutes');
app.use(cors());
app.use('/user',userRoutes);
app.use('/blog',blogRoutes);




app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})