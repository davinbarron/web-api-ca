import React from "react";
import Grid from "@mui/material/Grid2";
import ActorCard from "../actorCard";

const ActorList = ({ actors, action }) => {
  let actorCards = actors.map((a) => (
    <Grid key={a.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <ActorCard key={a.id} actor={a} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;
