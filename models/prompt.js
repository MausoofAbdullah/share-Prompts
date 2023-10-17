import { model,models,Schema } from "mongoose";

const promptSchema=({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    prompt:{
        type:String,
        required:[true,"prompt is required"]
    },
    tag:{
        type:String,
        required:[true,"tag is also required"]
    }
})

const PromptModel=models.prompt || model('prompt',promptSchema)

export default PromptModel