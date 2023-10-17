
import PromptModel from "@models/prompt";
import { connectToDB } from "@utils/database";

//GET
export const GET=async(req,{params})=>{
    try {
        await connectToDB()
        const prompt=await PromptModel.findById(params.id).populate('creator')
        if(!prompt) return new Response("prompt not found",{status:404})
     
        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        return new Response("failed to fetch all prompts",{status:500})
    }
}

//update
export const PATCH=async(req,{params})=>{
   
    const {prompt,tag} =await req.json()
    
    console.log(prompt,"check")
    try {
        await connectToDB()
        const existingPrompt=await PromptModel.findById(params.id)
        
        if(!existingPrompt) return new Response("prompt not found",{status:404})
        existingPrompt.prompt=prompt
        existingPrompt.tag=tag
        await existingPrompt.save()
        return new Response(JSON.stringify(existingPrompt,{status:200}))
    } catch (error) {
        return new Response("failed to update prompt",{status:500})
    }
}

//Delete
export const DELETE=async(req,{params})=>{
    try {
        
        await connectToDB()
    
      const deleted=  await PromptModel.findByIdAndRemove(params.id)
      console.log(deleted,'deletere')
        return new Response("prompt deleted successfully",{status:200})
    } catch (error) {
        console.log(error,"errrrr")
        return new Response("failed to delete the prompt",{status:500})
    }
}