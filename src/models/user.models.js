import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowerCase : true,
        trim : true,
        index : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowerCase : true,
        trim : true
    },
    fullName : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    password  : {
        type: String,
        required: [true, "Password is required"]
    },
    address : {
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
    },
    phoneNunber : {
        type : String,
        required : true
    },
    refreshToken : {
        type : String
    }
}, 
{
    timestamps : true,
    versionKey : false
})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 8)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            email : this.email,
            username : this.username,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id,
            email : this.email,
            username : this.username,
            fullName : this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)