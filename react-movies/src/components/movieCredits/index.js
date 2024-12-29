import React from "react";
import Grid from "@mui/material/Grid2";
import { getActorCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from '../../components/spinner';
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import MovieCreditsList from "../movieCreditsList";

const MovieCredits = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["credits", { id: id }],
    getActorCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const credits = data.cast;

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
    >
      <Typography variant="h4" component="h3" sx={{ margin: "1em" }}>
        Starred In
      </Typography>

      <Grid container>
        <Grid container sx={{ flex: "2 1 500px" }}>
          <MovieCreditsList credits={credits} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MovieCredits;
