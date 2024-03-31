import express from "express";
import { allpost, deletePost, newpost, singlePost, singleUserPost,  updatePost } from "../controller/missions.controller.js";
import { varifyToken } from "../middleware/validuser.js";
const router = express.Router();


router.post("/create",varifyToken, newpost);
router.get('/allpost', allpost);
router.get('/:user', singleUserPost);
router.delete('/delete/:id', varifyToken, deletePost);
router.get('/get/:post', varifyToken, singlePost)
router.put('/update/:id', updatePost)



export default router;