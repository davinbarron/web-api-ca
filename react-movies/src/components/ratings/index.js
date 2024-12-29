import React, { useState, useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Ratings = ({ movie }) => {
  const { handleAddRating, handleDeleteRating, ratings } = useContext(MoviesContext);
  const [value, setValue] = useState(ratings[movie.id] || 0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = () => {
    handleAddRating(movie, value);
    setSubmitted(true);
  };

  const handleRatingDelete = () => {
    handleDeleteRating(movie);
    setValue(0);
    setSubmitted(false);
  };

  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography variant="h5" component="h3">
        Rate this movie
      </Typography>
      <Rating
        name={`rating-${movie.id}`}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
      {submitted ? (
        <Button onClick={handleRatingDelete} variant="contained" color="secondary">
          Delete Rating
        </Button>
      ) : (
        <Button onClick={handleRatingSubmit} variant="contained" color="primary">
          Submit Rating
        </Button>
      )}
    </Box>
  );
};

export default Ratings;
