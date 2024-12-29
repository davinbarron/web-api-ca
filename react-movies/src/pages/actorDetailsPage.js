import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import Typography from "@mui/material/Typography";
import TemplateActorPage from "../components/templateActorPage"; // Use the template you created for actor details
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }], 
    getActorDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  return (
    <TemplateActorPage actor={actor}>
      <ActorDetails actor={actor}/>
    </TemplateActorPage>
  );
};

export default ActorDetailsPage;
