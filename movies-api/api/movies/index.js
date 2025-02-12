import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies,
    getGenres,
    getTopRatedMovies,
    getPopularMovies,
    getMovieDetails,
    getTrendingMovies,
    getMovies,
    getActors
} from '../tmdb-api';
import Watchlist from './watchlistModel';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

// New route to fetch top-rated movies from TMDb
router.get('/tmdb/top-rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

// New route to fetch movies by genre from MongoDB
router.get('/genre/:genreId', asyncHandler(async (req, res) => {
    const genreId = parseInt(req.params.genreId);
    const movies = await movieModel.find({ genre_ids: genreId });
    if (movies.length > 0) {
        res.status(200).json(movies);
    } else {
        res.status(404).json({ message: 'No movies found for this genre.', status_code: 404 });
    }
}));

// New route to fetch popular movies from TMDb
router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

// New route to fetch movie details by TMDb ID
router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const movieDetails = await getMovieDetails(id);
    res.status(200).json(movieDetails);
}));

// New route to fetch trending movies from TMDb
router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

// New route to fetch movies by release date range from MongoDB
router.get('/release-date/:releaseDate', asyncHandler(async (req, res) => {
    const releaseDate = req.params.releaseDate;
    const movies = await movieModel.find({ release_date: releaseDate });
    if (movies.length > 0) {
        res.status(200).json(movies);
    } else {
        res.status(404).json({ message: 'No movies found for this release date.', status_code: 404 });
    }
}));

// New endpoint to add a movie to the watchlist
router.post('/watchlist', asyncHandler(async (req, res) => {
    const { user, movieId, title, poster_path } = req.body;

    if (!user || !movieId || !title) {
        return res.status(400).json({ message: 'User, movie ID, and title are required.' });
    }

    const newWatchlistItem = new Watchlist({ user, movieId, title, poster_path });
    await newWatchlistItem.save();
    res.status(201).json(newWatchlistItem);
}));

// New endpoint to remove a movie from the watchlist
router.delete('/watchlist', asyncHandler(async (req, res) => {
    const { user, movieId } = req.body;

    if (!user || !movieId) {
        return res.status(400).json({ message: 'User and movie ID are required.' });
    }

    const result = await Watchlist.deleteOne({ user: user, movieId: movieId });
    if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Movie removed from watchlist.' });
    } else {
        res.status(404).json({ message: 'Movie not found in watchlist.', status_code: 404 });
    }
}));

// New endpoint to retrieve the user's watchlist
router.get('/watchlist/:user', asyncHandler(async (req, res) => {
    const user = req.params.user;
    const watchlist = await Watchlist.findByUser(user);
    if (watchlist.length > 0) {
        res.status(200).json(watchlist);
    } else {
        res.status(404).json({ message: 'No watchlist found for this user.', status_code: 404 });
    }
}));

// New endpoint to retrieve the tmdb movies
router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const { page = 1 } = req.query;
    const movies = await getMovies(page);
    res.status(200).json(movies);
}));

// New endpoint to retrieve the tmdb actors
router.get('/tmdb/actors', asyncHandler(async (req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
}));


export default router;
