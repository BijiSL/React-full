const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
password:String,
phonenumber:String
});

const UserData=mongoose.model('userdata',UserSchema);
module.exports=UserData;