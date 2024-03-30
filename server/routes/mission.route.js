import express from "express";
import { newpost } from "../controller/missions.controller.js";
import { varifyToken } from "../middleware/validuser.js";
const router = express.Router();


router.post("/create",varifyToken, newpost);



export default router;