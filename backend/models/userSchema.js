import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    username: {
        type:String,
        required:[true,"Please provide a username!"],
        minLength:[3,"Name must contain atleast 3 character!"],
        maxLength:[30,"Name cannot exceed 30 characters!"],
    },
    email:{
        type:String,
        required:[true,"Please provide your email!"],
        validate:[validator.isEmail,"Please provide a valid email!"],
    },
    password:{
        type:String,
        required:[true,"Please provide your password!"],
        minLength:[8,"Password must contain atleast 8 characters!"],
        maxLength:[32,"Password cannot exceed 32 characters!"],
    },
    role:{
        type:String,
        required:[true,"please provide your role"],
        enum:["Organiser","participant"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

});

//HASHING THE PASSWORD
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
    
});
//comparing password
userSchema.methods.comparePassword=async function (enteredPasssword) {
    return await bcrypt.compare(enteredPasssword,this.password);
};
//generating a jwt token for authorization
userSchema.methods.geJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE,
    });
};

export const User=mongoose.model("User",userSchema);