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
  



   export const singlePost = async(req, res, next) =>{
    try{
      console.log(req.params.post)
      const post = await Mission.find({_id : req.params.post})
     
        res.status(200).json(post);
    }
    catch(err){
      next(err);
    }
  }



  export const updatePost = async (req, res, next) => {
    console.log(req.params.id);
    if (!req.body.title || req.body.title === '' || !req.body.catagory || req.body.catagory === '' || !req.body.content || req.body.content === '') {
        return next(
          errorHendeler(404, 'All fields are required')
        );
    }

    try {
        const updatedUser = await Mission.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    title: req.body.title,
                    catagory: req.body.catagory,
                    content: req.body.content,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return next(
              errorHendeler(404, 'Post not found')
            );
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};
  