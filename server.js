import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config'

// app config
const app = express()
const port = process.env.PORT

// middleware
app.use(express.json())
app.use(cors())

// database connection
connectDB()

// api end points
app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`port started on ${port}`)
})

