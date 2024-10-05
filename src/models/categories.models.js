import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        index : true
    },
    description : {
        type : String,
        required : true,
        lowerCase : true,
        trim : true
    }
},
{
    timestamps : true,
    versionKey : false
} 
)


export const Category = mongoose.model("Category", categorySchema)