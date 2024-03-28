import User from "../models/user.model.js";
import  bcryptjs from 'bcryptjs';
import { error } from "console";
import jwt from "jsonwebtoken";



export const signIn = async (req, res ) => {
    const { email, password  } = req.body;
    try{
       if(!email || !password){
        return res.status(400).json({ error: 'All fields are required' });
       }
       const validUser = await User.findOne({email});
       if(!validUser){
        return res.status(404).json({ error: 'Email not found' });
       }
       const validPasword = bcryptjs.compareSync(password, validUser.password);
       if(!validPasword){
        return res.status(400).json({ error: 'Invalid password' });
       }
 
       // remove password from user for frontend sequrity--------------------------------
       const {password : pass, ...rest} = validUser._doc;
       const token =  jwt.sign({id : validUser._id , isAdmin: validUser.admin}, process.env.JWT_SECRET)
       res.status(200).cookie('access_token', token,{httpOnly : true}).json(rest);
       
    }
    catch(err){
       return error(err);
    }
 
 
 
 }