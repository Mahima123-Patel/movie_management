import Movie from "../models/movieModel.js";

export const createMovie = async (movieData) => {
  const movie = new Movie(movieData);
  return await movie.save();
};

export const getAllMovies = async () => {
  return await Movie.find();
};

export const getMovieById = async (id) => {
  return await Movie.findById(id);
};

export const updateMovie = async (id, movieData) => {
  return await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
    runValidators: true, 
  });
};

export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

