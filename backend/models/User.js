import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:"string",
        trim:true,
        unique:true,
    },
    phone:Number,
    password:String,
    role:{type:String,enum:['admin','user']},
    },
    {
        timestamps:true,
    }

)

UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10)
    }
    next();
})

const UserModel=mongoose.model("users",UserSchema);

export default UserModel;