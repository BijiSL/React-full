const mongoose=require('mongoose');
mongoose.connect(process.env.mongourl).then(()=>{
    console.log('DB Connected');
}).catch(()=>{
    console.log('connection lost');
})

// const connectDB=()=>{
//     mongoose.connect((mongourl))
//     .then(()=>console.log("DB connected.."))
//     .catch((error)=>console.log(error))
// }
// const connectDB=()=>{
//     mongoose.connect((mongourl)).then(()=>{
//     console.log('Connection established');
// }).catch(()=>{
//     console.log('Connection error');
// })}
