import React, { useState } from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '../components/pagination';

const TopRatedMoviesPage = (props) => {
  const [page, setPage] = useState(1); 
  const { data, error, isLoading, isError } = useQuery(['topRated', page], () => getTopRatedMovies(page));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <>
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
    <Pagination 
    currentPage={page} 
    totalPages={100} 
    onPageChange={(newPage) => setPage(newPage)} 
    />
    </>
  );
};

export default TopRatedMoviesPage;