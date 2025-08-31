import Movie from "../models/movieModel.js";

// Create new movie
export const createMovie = async (movieData) => {
  const movie = new Movie(movieData);
  return await movie.save();
};

// Get all movies
export const getAllMovies = async () => {
  return await Movie.find();
};

// Get movie by ID
export const getMovieById = async (id) => {
  return await Movie.findById(id);
};

// Update movie
export const updateMovie = async (id, movieData) => {
  return await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
    runValidators: true, 
  });
};

// Delete movie
export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
