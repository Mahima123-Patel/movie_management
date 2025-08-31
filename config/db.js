import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {
    const mongo_url = process.env.NODE_ENV === "test" 
    ? process.env.TEST_MONGODB_URL 
    : process.env.MONGODB_URL;

    await mongoose.connect(mongo_url).then(()=>console.log("DB Connected"));
}
