import PromptModel from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST=async(req,res)=>{
    // console.log(req.body,'req')
    const {userId,prompt,tag}=await req.json()
    // console.log(prompt,"promp")
    try {
        await connectToDB()
        const newPrompt=new PromptModel({
            creator:userId,
            prompt,
            tag 
        })
        console.log(newPrompt,"new")
        await newPrompt.save()
        console.log("data")
        console.log(newPrompt,"data")
        return new Response(newPrompt,{status:201})

    } catch (error) {
        return new Response("failed to create new prompt",{status:500})
    }
}