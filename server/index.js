import express from  "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import cors from 'cors'
import cookieParser from 'cookie-parser'; 

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.json());
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials : true,
    }  
));


app.use(cookieParser());

mongoose.connect(process.env.MONGO)
.then( ()=>{
    console.log("mongodb is connected"); 
})
.catch((err)=>{
    console.log(err);
})


app.listen(3000 , () =>{
    console.log("port is running in 3000 port");
});


app.use('/api/user' ,userRouter);