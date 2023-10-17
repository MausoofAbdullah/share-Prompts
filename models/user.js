import { Schema,model,models } from "mongoose";

const userSchema=new Schema({
    email:{
        type:String,
        unique:[true,"allready exists"],
        required:[true,"email is required"]
    },
    username:{
        type:String,
        required:[true,"username is required"]
    },
    image:{
        type:String
    }
})

const userModel=models.user || model("user",userSchema)
export default userModel