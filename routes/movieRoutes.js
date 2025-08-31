/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         title:
 *           type: string
 *           description: Movie title
 *         director:
 *           type: string
 *         releaseYear:
 *           type: number
 *         genre:
 *           type: string
 *         rating:
 *           type: number
 *       example:
 *         title: "Inception"
 *         director: "Christopher Nolan"
 *         releaseYear: 2010
 *         genre: "Sci-Fi"
 *         rating: 9
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of all movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */




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
