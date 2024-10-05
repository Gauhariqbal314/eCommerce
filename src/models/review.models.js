import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    productId : {
        type : Schema.Types.ObjectId,
        ref : "Product"
    },
    rating : {
        type : Number
    },
    comments : {
        type : String,
        trim : true,
        lowerCase : true
    }
},
{
    timestamps : true,
    versionKey : false
})

export const review = mongoose.model("Review", reviewSchema)