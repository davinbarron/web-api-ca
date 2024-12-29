import React from "react";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from "../components/templateActorListPage";
import Spinner from "../components/spinner";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ActorHomePage = () => {
  const { data, error, isLoading, isError } = useQuery(["actors"], getActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;

  return (
    <ActorListPageTemplate
      actors={actors}
      title="Discover Actors"
      action={(actor) => (
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      )}
    />
  );
};

export default ActorHomePage;
