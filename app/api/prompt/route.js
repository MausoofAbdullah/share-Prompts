import PromptModel from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET=async(req,res)=>{
    try {
        await connectToDB()
        const prompts=await PromptModel.find({}).populate('creator')
     
        return new Response(JSON.stringify(prompts),{status:201})
    } catch (error) {
        return new Response("failed to fetch all prompts",{status:500})
    }
}