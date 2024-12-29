import React, { useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import Pagination from "../components/pagination";

const UpcomingPage = (props) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(['movie', page], () => getUpcomingMovies(page));

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylist = (movieId) => true

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        movie.isUpcoming = true;  // Add this flag to identify upcoming movies
        return <AddToPlaylistIcon movie={movie} />
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

export default UpcomingPage;