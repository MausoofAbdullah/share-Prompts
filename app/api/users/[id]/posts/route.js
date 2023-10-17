import PromptModel from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET=async(req,{params})=>{
console.log("somethidng in apin")
    console.log(params,"paarams")
    try {
        await connectToDB()
        const prompts=await PromptModel.find({creator:params.id}).populate('creator')
        console.log(prompts,"pfdofd")
     
        return new Response(JSON.stringify(prompts),{status:201})
    } catch (error) {
        console.log(error,'err')
        return new Response("failed to fetch all prompts",{status:500})
    }
}