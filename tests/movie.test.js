import request from "supertest";
import mongoose from "mongoose";
import { beforeAll, afterAll, describe, it, expect } from "@jest/globals";
import dotenv from "dotenv";
dotenv.config();
import app from "../server.js"; 
import Movie from "../models/movieModel.js";


beforeAll(async () => {
  // Connect to test database
  await mongoose.connect(process.env.TEST_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Disconnect from DB
  await mongoose.connection.dropDatabase(); // optional: clear test DB
  await mongoose.connection.close();
});

describe("Movie API Integration Tests", () => {
  let movieId; // store created movie ID for further tests

  it("should return 200 for GET /movies (empty at start)", async () => {
    const res = await request(app).get("/movies");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new movie", async () => {
    const res = await request(app)
      .post("/movies")
      .send({
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Sci-Fi",
        rating: 9,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.title).toBe("Inception");
    movieId = res.body._id;
  });

  it("should fail to create a movie without title", async () => {
    const res = await request(app)
      .post("/movies")
      .send({
        director: "Unknown",
        rating: 5,
      });
    expect(res.status).toBe(400);
    expect(res.body.errors[0].msg).toBe("Title is required");
  });

  it("should get the created movie by ID", async () => {
    const res = await request(app).get(`/movies/${movieId}`);
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(movieId);
  });

  it("should return 404 for non-existent movie ID", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).get(`/movies/${fakeId}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Movie not found");
  });

  it("should update the movie title and rating", async () => {
    const res = await request(app)
      .put(`/movies/${movieId}`)
      .send({
        title: "Inception Updated",
        rating: 10,
      });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Inception Updated");
    expect(res.body.rating).toBe(10);
  });

  it("should delete the movie", async () => {
    const res = await request(app).delete(`/movies/${movieId}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Movie deleted successfully");
  });

  it("should return 404 when deleting a non-existent movie", async () => {
    const res = await request(app).delete(`/movies/${movieId}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Movie not found or could not be deleted");
  });
});