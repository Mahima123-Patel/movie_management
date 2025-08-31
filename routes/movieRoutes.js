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
 *         title: "Vash"
 *         director: "Krishnadev Yagnik"
 *         releaseYear: 2023
 *         genre: "supernatural horror thriller"
 *         rating: 8
 */


/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     description: Add a new movie to the database. The title is required; other fields are optional.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *           example:
 *             title: "Vash"
 *             director: "Krishnadev Yagnik"
 *             releaseYear: 2023
 *             genre: "supernatural horror thriller"
 *             rating: 8
 *     responses:
 *       201:
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: "64f3c9e2b8f7a123456789ab"
 *               title: "Vash"
 *               director: "Krishnadev Yagnik"
 *               releaseYear: 2023
 *               genre: "supernatural horror thriller"
 *               rating: 8
 *               createdAt: "2025-08-31T08:00:00.000Z"
 *               updatedAt: "2025-08-31T08:00:00.000Z"
 *       400:
 *         description: Bad request - missing or invalid fields
 *         content:
 *           application/json:
 *             example:
 *               errors:
 *                 - msg: "Title is required"
 *                   param: "title"
 *                   location: "body"
 */

router.post("/", validateMovie, validateRequest, createMovie);        


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
 *             example:
 *               - _id: "68b459e0094c793957d78ecc"
 *                 title: "Paa"
 *                 director: "R.Balki"
 *                 releaseYear: 2009
 *                 genre: "comedy-drama"
 *                 rating: 7
 *                 createdAt: "2025-08-31T14:19:12.764Z"
 *                 updatedAt: "2025-08-31T14:19:12.764Z"
 *               - _id: "68b459e0094c793957d78edf"
 *                 title: "Inception"
 *                 director: "Christopher Nolan"
 *                 releaseYear: 2010
 *                 genre: "Sci-Fi"
 *                 rating: 9
 *                 createdAt: "2025-08-31T14:20:00.000Z"
 *                 updatedAt: "2025-08-31T14:20:00.000Z"
 */
router.get("/", getAllMovies);        


/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     description: Returns the movie with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie ID
 *     responses:
 *       200:
 *         description: Movie found
 *         content:
 *           application/json:
 *             example:
 *               _id: "68b459e0094c793957d78ecc"
 *               title: "Paa"
 *               director: "R.Balki"
 *               releaseYear: 2009
 *               genre: "comedy-drama"
 *               rating: 7
 *               createdAt: "2025-08-31T14:19:12.764Z"
 *               updatedAt: "2025-08-31T14:19:12.764Z"
 *       404:
 *         description: Movie not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie not found"
*/
router.get("/:id", getMovieById);


/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie by ID
 *     tags: [Movies]
 *     description: Update one or more fields of a movie. Only provide the fields you want to update.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *           example:
 *             title: "Paa Updated"
 *             rating: 8
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             example:
 *               _id: "68b459e0094c793957d78ecc"
 *               title: "Paa Updated"
 *               director: "R.Balki"
 *               releaseYear: 2009
 *               genre: "comedy-drama"
 *               rating: 8
 *               createdAt: "2025-08-31T14:19:12.764Z"
 *               updatedAt: "2025-08-31T15:00:00.000Z"
 *       404:
 *         description: Movie not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie not found"
 */
router.put("/:id", validateMovie, validateRequest, updateMovie);      


/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movies]
 *     description: Permanently removes the movie with the given ID from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie ID to delete
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie deleted successfully"
 *               deletedMovie:
 *                 _id: "68b459e0094c793957d78ecc"
 *                 title: "Paa"
 *                 director: "R.Balki"
 *                 releaseYear: 2009
 *                 genre: "comedy-drama"
 *                 rating: 7
 *                 createdAt: "2025-08-31T14:19:12.764Z"
 *                 updatedAt: "2025-08-31T14:19:12.764Z"
 *       404:
 *         description: Movie not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Movie not found"
 */
router.delete("/:id", deleteMovie);




export default router;
