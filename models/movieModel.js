import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Moviee title is required"],
        trim: true,
    },
    director: {
        type: String,
        trim: true,
    },
    releaseYear: {
        type: Number,
        min: [1888, "Release year must be after 1888"],
        max: [new Date().getFullYear(), "Release year cannot be in the future"],
    },
    genre: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating must be at most 10"]
    },
},
    { timestamps: true }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
