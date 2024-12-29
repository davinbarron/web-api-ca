// components/movieVideos/index.js
import React from "react";
import { useQuery } from "react-query";
import { getMovieVideos } from "../../api/tmdb-api";
import Spinner from "../spinner";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";

const MovieVideos = ({ movie }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["videos", { id: movie.id }],
    getMovieVideos
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  const videos = data.results;

  // https://developers.google.com/youtube/player_parameters
  return (
    <>
      <Typography variant="h5" component="h3">
        Movie Videos
      </Typography>
      <br></br>
      <Grid2 container spacing={3}>
        {videos.map((video) => (
          <Grid2 item key={video.id} xs={12} sm={6} md={4}>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default MovieVideos;
