import { body } from "express-validator";

export const validateMovie = [
  body("title")
    .notEmpty().withMessage("Title is required")
    .isString().withMessage("Title must be a string"),

  body("director")
    .optional()
    .isString().withMessage("Director must be a string"),

  body("releaseYear")
    .optional()
    .isInt({ min: 1888, max: new Date().getFullYear() })
    .withMessage("Release year must be a valid year"),

  body("genre")
    .optional()
    .isString().withMessage("Genre must be a string"),

  body("rating")
    .optional()
    .isFloat({ min: 1, max: 10 })
    .withMessage("Rating must be between 1 and 10"),
];
