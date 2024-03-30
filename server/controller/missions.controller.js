import { errorHendeler } from "../middleware/error.js";
import Mission from "../models/missions.model.js";

export const newpost = async (req, res, next) =>{
    const { title, catagory, content  } = req.body;
    console.log(req.body)
    try{
    
    if(!req.body.title || !req.body.content){
      return next(errorHendeler("required all field"))
    }
    const slug = req.body.title.split(' ').join('-').toLowerCase();
    const newPost = new Mission({
      title, catagory, content, slug,  userId: req.user.id 
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


  export const singleUserPost = async(req, res, next) =>{
    try{
      const userPost = await Mission.find({userId : req.params.user})
     
      res.status(200).json(userPost);
    }
    catch(err){
      next(err);
    }
  }


  export const deletePost = async  (req, res, next) =>{
    const _id =req.params.id;
      try{
        const validpost = await Mission.findOne({_id});
        if(validpost){
        await Mission.findByIdAndDelete(req.params.id)
        res.status(200).json("post deleted")
        }
        else{
          return next(errorHendeler(404, 'post not found'))
        }
      }
      catch(err){
        next(errorHendeler(err))
      }
   }
  
  