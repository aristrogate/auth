const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");


const signup = async(req,res)=>{
    try{
        const{username,email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message: 'User already exist, you can login', sucess:false});
        }
        const userModel = new UserModel({username,email,password});
        userModel.password = await bcrypt
    } catch(err){

    }
}

module.exports = {
    signup
}