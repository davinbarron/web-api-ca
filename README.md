# Assignment 2 - Web API.

Name: Davin Barron

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Creating an `.env` file.

Example below:
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://host:port/database
TMDB_KEY=12345678
SECRET=ThisIsASecret
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

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
