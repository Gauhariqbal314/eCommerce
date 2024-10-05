import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    items : [
        {
            productId : {
                type : Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number,
                required : true
            },
            price : {
                type : Number,
                required : true
            }
        }
    ],
    totalAmount : {
        type : Number,
        required : true
    },
    shippingAddress : {
        street: {
            type : String,
            required : true
        },
        city: {
            type : String,
            required : true
        },
        state: {
            type : String,
            required : true
        },
        zipCode: {
            type : String,
            required : true
        },
        country: {
            type : String,
            required : true
        }
    }
},
{
    timestamps : true,
    versionKey : false
})


export const Order = mongoose.model("Order", orderSchema)