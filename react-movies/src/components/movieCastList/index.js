import React from "react";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid2";

const MovieCastList = (props) => {
  let movieCast = props.cast.map((m) => (
    <Grid key={m.id} size={{xs: 1, sm: 2, md: 3, lg: 4, xl: 4}} sx={{padding: "10px"}}>
      <ActorCard key={m.id} actor={m} action={() => {}} />
    </Grid>
  ));
  return movieCast;
};

export default MovieCastList;