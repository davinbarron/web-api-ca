import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [ratingsFilter, setRatingsFilter] = useState("0");
  const ratingsID = Number(ratingsFilter);
  const [releaseDateFilter, setReleaseDateFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => { 
      return ratingsID > 0 ? m.vote_average >= ratingsID : true; 
    }) 
    .filter((m) => { 
      return releaseDateFilter ? m.release_date.startsWith(releaseDateFilter) : true; 
    });

    if (sortBy) 
      { 
        if (sortBy === "titleAsc") 
          { 
            displayedMovies.sort((a, b) => a.title.localeCompare(b.title)); 
          } 
        else if (sortBy === "titleDesc") 
          { 
            displayedMovies.sort((a, b) => b.title.localeCompare(a.title)); 
          } 
        else if (sortBy === "ratingAsc") 
          { 
            displayedMovies.sort((a, b) => a.vote_average - b.vote_average); 
          } 
        else if (sortBy === "ratingDesc") 
          { 
            displayedMovies.sort((a, b) => b.vote_average - a.vote_average); 
          } 
        else if (sortBy === "releaseDateAsc") 
          { 
            displayedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date)); 
          } 
        else if (sortBy === "releaseDateDesc") 
          { 
            displayedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)); 
          }
        }

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "ratings") setRatingsFilter(value);
    else if (type === "releaseDate") setReleaseDateFilter(value);
    else if (type === "sort") setSortBy(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingsFilter}
            releaseDateFilter={releaseDateFilter}
            sortBy={sortBy}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;