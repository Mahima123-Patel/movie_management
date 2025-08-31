import * as movieDao from "../dao/movieDao.js";

// Create a new movie
export const createMovie = async (movieData) => {
  return await movieDao.createMovie(movieData);
};

// Get all movies
export const getAllMovies = async () => {
  return await movieDao.getAllMovies();
};

// Get a movie by ID
export const getMovieById = async (id) => {
  const movie = await movieDao.getMovieById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
};

// Update movie by ID
export const updateMovie = async (id, movieData) => {
  const updatedMovie = await movieDao.updateMovie(id, movieData);
  if (!updatedMovie) {
    throw new Error("Movie not found or could not be updated");
  }
  return updatedMovie;
};

// Delete movie by ID
export const deleteMovie = async (id) => {
  const deletedMovie = await movieDao.deleteMovie(id);
  if (!deletedMovie) {
    throw new Error("Movie not found or could not be deleted");
  }
  return deletedMovie;
};
