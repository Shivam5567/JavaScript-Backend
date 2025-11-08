import mongoose from "mongoose"

const subTodo=mongoose.Schema({
    content:{
        types:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},{timestamps:true})

export const SubTodo=mongoose.model("SubTodo",subTodo);