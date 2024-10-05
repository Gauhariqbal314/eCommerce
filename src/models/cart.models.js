import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    status : {
        type : String,
        required : true
    },
    items : [
        {
            products : {
                type : Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number,
                required : true
            }
        }
    ]
},
{
    timestamps : true,
    versionKey : false
})

export const Cart = mongoose.model("Cart", cartSchema)