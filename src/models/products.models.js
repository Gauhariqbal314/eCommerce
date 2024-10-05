import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : "Category"
    },
    brand : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    stocks : {
        type : String,
        required : true
    },
    images : [ String ]
},
{
    timestamps : true,
    versionKey : false
})


export const Product = mongoose.model("Product", productSchema)