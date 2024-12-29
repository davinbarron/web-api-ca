import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import MovieCredits from "../movieCredits";
import StarRate from "@mui/icons-material/StarRate";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: "1em",
};
const chip = { margin: 0.5 };

const ActorDetails = ({actor}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h4" component="h2">
        {actor.name}
      </Typography>

      <Typography variant="h5" component="h3" style={{ margin: "1em" }}>
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
      <Chip label="Popularity" sx={{...chip}} color="primary" />
      <Chip
          icon={<StarRate />}
          label={`${actor.popularity.toLocaleString()}`}
      />
      </Paper>

      <Typography variant="h5" component="h3" style={{ marginTop: "2em" }}>
        Known For
      </Typography>
      <MovieCredits id={actor.id} />

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
      </Fab>
    </>
  );
};

export default ActorDetails;
