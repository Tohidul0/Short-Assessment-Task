import { errorHendeler } from "../middleware/error.js";
import Mission from "../models/missions.model.js";

export const newpost = async (req, res, next) =>{
    const { title, catagory, content  } = req.body;
    console.log(req.body)
    try{
    
    if(!req.body.title || !req.body.content){
      return next(errorHendeler("required all field"))
    }
    const newPost = new Mission({
      title, catagory, content,  userId: req.user.id 
    });
  
      await newPost.save()
      res.json(newPost)
    }
    catch(err){
      next(err);
    }
  }



  export const allpost = async (req, res, next) =>{
    try{
      const posts = await Mission.find({});
  
      res.status(200).json({posts});
  
    }
    catch(err){
      next(err)
    }
  }
  