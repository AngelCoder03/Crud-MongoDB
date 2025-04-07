import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const URI_DB = process.env.URI_DB || ""


const connectDB = async () =>{
    try{
        await mongoose.connect(URI_DB)
        console.log("MongoDB connected")
    }catch(err){
        console.log("MongoDB connection error: ")
    }

}

export { connectDB }