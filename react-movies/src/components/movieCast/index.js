import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieCast } from "../../api/tmdb-api";
import Spinner from "../spinner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import MovieCastList from "../movieCastList";

const MovieCast = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["cast", { id: id }],
    getMovieCast
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  const cast = data.cast;

  return (
    <Paper 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
        padding: "15px",
      }}
    >
      <Typography variant="h4" component="h3">
        Cast 
      </Typography>
      <Grid container>
        <Grid container sx={{ flex: "2 1 500px" }}>
          <MovieCastList cast={cast} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MovieCast;
