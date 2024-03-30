import express from "express";
import { allpost, newpost, singleUserPost } from "../controller/missions.controller.js";
import { varifyToken } from "../middleware/validuser.js";
const router = express.Router();


router.post("/create",varifyToken, newpost);
router.get('/allpost', allpost);
router.get('/:user', singleUserPost);



export default router;