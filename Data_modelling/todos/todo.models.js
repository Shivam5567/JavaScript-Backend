import mongoose from "mongoose"
const todoSchema=new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,//it is used to take reference from other model
            ref:"User"
        },
        subTodos:[
            {//method 1 to declear schema:it is inside the array
                type:mongoose.Schema.Types.ObjectId,
                ref:"SubTodo"
            }
        ]
}//Array of Subtodo
,{timestamps:true}
)

export const Todo=mongoose.model("Todo",todoSchema)