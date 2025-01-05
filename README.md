# Assignment 2 - Web API.

Name: Davin Barron

## Features.

+ Added a movie watchlist feature that allows users to create, delete, and view their personal movie watchlists stored in a new MongoDB collection.
+ Implemented interaction with the TMDB API to fetch top-rated, popular, trending, movies and actors.
+ Have the frontend call our custom API to retireve information from either the TMDB API or the MongoDB database.
+ Created secure API routes using authentication to protect user-specific data with error handling.

## Setup requirements.

```
git clone https://github.com/davinbarron/react-api-ca.git
cd movies-api
npm run dev
cd react-movies
npm start
mongod
```

## API Configuration

Creating an `.env` file.

Example below:
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://host:port/database
TMDB_KEY=your_tmbd_api_key
SECRET=your_secret_key
______________________

## API Design

- /api/movies/genre/{genreid} | GET | Gets movies by a genre
- /api/movies/tmdb/top-rated | GET | Gets the top rated movies by TMDB
- /api/movies/tmdb/popular | GET | Gets popular movies by TMDB
- /api/movies/tmdb/trending | GET | Gets trending movies by TMDB
- /api/movies/tmdb/movie/{movieid} | GET | Gets movie details by TMDB ID
- /api/movies/release-date/{releaseDate} | GET | Gets movies by release date
- /api/movies/watchlist | POST | Create a new watchlist for Movie
- /api/movies/watchlist | DELETE | Delete a new watchlist for Movie 
- /api/movies/watchlist/{user} | Get | Get a movie watchlist for a user
- /api/movies/tmdb/movies | GET | Gets the movies by TMDB
- /api/movies/tmdb/actors | GET | Gets the actors by TMDB

Link to Swagger API graphic: https://app.swaggerhub.com/apis/DavinBarron/wad-api-ca/1.0.0#/

## Security and Authentication

The API uses JWT (JSON Web Tokens) for authentication. The user must be logged into a valid account. If they don't already have one they can sign up.

The API contains protected routes that require valid JWT tokens:

- /reviews/:id
- /reviews/form
- /movies/favorites
- /movies/playlist
- /movies/:id
- /movies/:id/recommendations
- /movies/upcoming
- /movies/top_rated
- /movies/trending
- /actors
- /actors/:id

## Integrating with React App

The React app makes API calls to the custom backend to retrieve user and movie-related data instead of directly calling the TMDB API.

+ Custom API Call to TMDB: The backend API fetches data from the TMDB API (e.g., upcoming movies) using a function like getUpcomingMovies(), which makes requests to TMDB with an API key.
+ Custom API Route to TMDB or MongoDB: Routes like /api/movies/tmdb/upcoming and /api/users are created on the backend to handle frontend requests, fetch from TMDB API or fetch data from the MongoDB database, and return the results.
+ Frontend Integration: The React app calls the custom API routes (e.g., http://localhost:8080/api/movies/tmdb/upcoming) to get movie data from either TMDB or MongoDB, using an authorization token for security.

The following views use the custom API instead of directly calling TMDB:

- /movies/upcoming
- /movies/top_rated
- /movies/trending
- /actors
- /movies/tmdb/genres
- /login
- /signup
- /movies/tmdb/movies

Updates to Assignment One:

- Added an authentication context
- Created signup and login pages
- Implemented protected routes
- Integrated signup and login to the site header