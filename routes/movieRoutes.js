import express from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";
import { validateMovie } from "../middlewares/validateMovie.js";
import { validateRequest } from "../middlewares/errorHandler.js";


const router = express.Router();

// Routes mapping
router.post("/", validateMovie, validateRequest, createMovie);        
router.get("/", getAllMovies);        
router.get("/:id", getMovieById);    
router.put("/:id", validateMovie, validateRequest, updateMovie);      
router.delete("/:id", deleteMovie);   

export default router;
