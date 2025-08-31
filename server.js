import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config'
import movieRoutes from "./routes/movieRoutes.js"

// app config
const app = express()
const port = process.env.PORT

// middleware
app.use(express.json())
app.use(cors())

// database connection
connectDB()

// api end points
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`port started on ${port}`)
})

