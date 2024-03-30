import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    userId : {
    type : String,
    },

    catagory: {
        type : String
    },

    content : {
        type : String
    },
    
    title : {
        type : String,
        require : true
    },
    
}, {timestamps : true});
const Mission = mongoose.model('Mission', postSchema );
export default Mission;