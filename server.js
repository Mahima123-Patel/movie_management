import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config'
import movieRoutes from "./routes/movieRoutes.js"
import { errorHandler } from "./middlewares/errorHandler.js";
import { swaggerDocs } from "./swagger/swagger.js";

// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())
// error handler
app.use(errorHandler);

// database connection
connectDB()

// api end points
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("API Working")
})


// swagger
swaggerDocs(app, port);

// start the server only if it is not in the test mode
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`port started on ${port}`)
    })
}

export default app;