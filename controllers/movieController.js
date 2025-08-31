import * as movieService from "../services/movieService.js";

// Create a new movie
export const createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a movie by ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a movie by ID
export const updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete a movie by ID
export const deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovie(req.params.id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
