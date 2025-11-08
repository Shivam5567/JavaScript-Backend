import mongoose from "mongoose"

const orderItemsSchema=new mongoose.Schema({  // mini Schema declearation
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})




const ordersSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{//method 2 of declearation of schema in mini schema declearation
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
},{timestamps:true})

export const Order=mongoose.model("Order",ordersSchema);