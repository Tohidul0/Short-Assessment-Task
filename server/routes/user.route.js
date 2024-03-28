import express from "express";
import { signIn } from "../controller/user.controller.js";

const  router = express.Router();

router.get('/alluser', signIn )


export default router;