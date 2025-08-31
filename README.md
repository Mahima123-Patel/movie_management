# Movie Management API

A **Node.js + Express + MongoDB** backend API for managing movies, supporting full **CRUD operations**, **unit & integration testing**, **Swagger documentation**, and **Dockerized**.

---

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Testing:** Jest & Supertest (Unit & Integration Tests)
- **Documentation:** Swagger / OpenAPI 3.0
- **Environment Management:** dotenv (.env) 
- **Containerization:** Docker 

---

##  Features

- **CRUD operations** for movies:
  - `GET /movies` — List all movies
  - `GET /movies/:id` — Get a movie by ID
  - `POST /movies` — Create a new movie
  - `PUT /movies/:id` — Update a movie’s title & rating
  - `DELETE /movies/:id` — Delete a movie by ID

- **Validation** for required fields (title, rating, etc.)

- **Unit tests** for core logic & API endpoints

- **Integration tests** for real-world scenarios: (Bonus point covered)
  - Creating a movie with missing title → expect 400
  - Accessing non-existent movie ID → expect 404
  - Deleting non-existent movie → expect 404

- **Swagger UI** at `/api-docs` for easy API exploration

- **Dockerized application**(Bonus point covered)
- `.env` support (Bonus point covered)
---

##  How to Run the Project

### Follow these steps to get the Movie Management API up and running:

# 1. Installation, Setup and Clone the repository:
#### First, copy the repository to your local machine:

```bash
git clone https://github.com/Mahima123-Patel/movie_management.git
cd Movie-API
```

# 2. Install dependencies:
#### Install all required Node.js packages using npm:

```bash
npm install
```
#### This will read the package.json file and install all dependencies needed to run the project and tests.

# 3. Create a .env file in the root folder:
#### Create a .env file in the root of the project and add the following:

```bash
PORT=4000
MONGODB_URL=<your MongoDB connection URL>
TEST_MONGODB_URL=<your test DB URL>
```
#### Note: Replace "your MongoDB connection URL" and "your test MongoDB URL" with your own MongoDB URLs. The PORT can be changed if you want to run the app on a different port.
---
# 4. Running the Project actually and start the server

#### Run the server locally:
```bash
npm run server
```
- The server will start on the port defined in .env (default is 4000)
- You should see console messages like:
   ```bash
   DB Connected
   Swagger Docs available at http://localhost:4000/api-docs
   ```

# 5. Access the API:
- Open your browser and navigate to:
```bash
http://localhost:4000/api-docs
```
- This will open the Swagger UI, where you can explore and test all API endpoints.

---
# 6. Running tests:
### Run unit and integration tests with:
```bash
npm test
```
- This will execute all tests in the tests/ folder using Jest & Supertest
- You should see output indicating passed/failed tests. For example:
  ```bash
  Tests:       8 passed, 0 failed
  Test Suites: 1 passed, 1 total
  ```
---
# 7. Optional: Run with Docker
#### If you want to run the application inside Docker:

### Build the docker image
```bash
docker build -t movie-api .
```

### Run the container
```bash
docker run -d -p 4000:4000 --env-file .env --name movie-api-container movie-api
```

### Check logs
```bash
docker logs -f movie-api-container
```
- You should see messages confirming the database connection and Swagger docs availability.

---
## Project Structure
```bash
Movie-API/
├─ config/
│  └─ db.js
├─ controllers/
│  └─ movieController.js
├─ dao/
│  └─ movieDao.js
├─ middleware/
│  └─ errorHandler.js
│  └─ validateMovie.js
├─ models/
│  └─ movieModel.js
├─ routes/
│  └─ movieRoutes.js
├─ services/
│  └─ movieService.js
├─ tests/
│  └─ movie.test.js
├─ swagger/
│  └─ swagger.js
├─ .dockerignore
├─ Dockerfile
├─ .gitignore
├─ .env
├─ babel.config.cjs
├─ jest.config.cjs
├─ package-lock.json
├─ package.json
├─ server.js
└─ README.md
```

## Links
[Swagger Documentation](http://localhost:4000/api-docs)

[Github repository](https://github.com/Mahima123-Patel/movie_management)



