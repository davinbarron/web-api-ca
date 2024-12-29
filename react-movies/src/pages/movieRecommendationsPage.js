import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieRecommendations from "../components/movieRecommendations";
import Pagination from "../components/pagination";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const MovieRecommendationsPage = (props) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data: movie, error, isLoading, isError } = useQuery(
    ["recommendations", { id: id, page }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
            <MovieRecommendations 
            recommendations={movie} 
            title="Recommended Movies"
            action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
           }}
           />
            <Pagination 
             currentPage={page} 
            totalPages={100} 
            onPageChange={(newPage) => setPage(newPage)} 
           />
        </>
      ) : (
        <p>Waiting for movie recommendations</p>
      )}
    </>
  );
};

export default MovieRecommendationsPage;