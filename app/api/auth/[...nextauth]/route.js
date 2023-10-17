import NextAuth from "next-auth";
import { connectToDB } from "@utils/database";
import GoogleProvider from "next-auth/providers/google"
import userModel from "@models/user";



const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ],
    callbacks:{
        async session({session}){
            try {
                const sessionUser=await userModel.findOne({
                    email:session.user.email
                })
    
                session.user.id=sessionUser._id.toString()
                return session
            } catch (error) {
                
            }
        },
        async signIn({profile}){
            try {
                
                await connectToDB()
        
                const userExists=await userModel.findOne({email:profile.email})
                if(!userExists){
                    await userModel.create({
                        email:profile.email,
                        username:profile.name.replace(' ','').toLowerCase(),
                        image:profile.picture
                    })
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
    
})
export {handler as GET,handler as POST}
