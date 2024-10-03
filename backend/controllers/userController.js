import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/error.js';
import { User } from '../models/userSchema.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncError(async(req,res,next)=>{
    const {username,email,role,password} = req.body;
    if(!username|| !email|| !role|| !password){
        return next(new ErrorHandler("Please fill full registration form!"));
    }
    const isEmail = await User.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("Email already exists!"));
    }
    const user= await User.create({
        username,
        email,
        role,
        password,
    });
    sendToken(user,200,res,"User registered successfully!");
    
    });

    export const login = catchAsyncError(async (req, res, next) => {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
          return next(new ErrorHandler("Please provide email ,password and role."));
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          return next(new ErrorHandler("Invalid Email Or Password.", 400));
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
          return next(new ErrorHandler("Invalid Email Or Password.", 400));
        }
        if (user.role !== role) {
          return next(
            new ErrorHandler(`User with provided email and ${role} not found!`, 404)
          );
        }
        sendToken(user, 201, res, "User Logged In!");
      });

  
    
  

     



