import React, { useState } from "react";
import { addRating, deleteRating } from '../api/tmdb-api';

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [playlist, setPlaylist] = useState( [] )
  const [ratings, setRatings] = useState({})

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
  };

  const removeFromPlaylist = (movie) => { 
    setPlaylist(playlist.filter((mId) => mId !== movie.id)); 
  };

  //console.log(playlist);

  const handleAddRating = async (movie, rating) => 
    { 
      try 
      { 
        await addRating(movie.id, rating); 
        setRatings({ ...ratings, [movie.id]: rating }); 
      } 
      catch (error) 
      { 
        console.error("Error adding rating:", error); 
      } 
    }; 
    
  const handleDeleteRating = async (movie) => 
    { 
      try 
      { 
        await deleteRating(movie.id); 
        const newRatings = { ...ratings }; 
        delete newRatings[movie.id]; 
        setRatings(newRatings); 
      } 
      catch (error) 
      { 
        console.error("Error deleting rating:", error); 
      } 
    };


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        playlist,
        ratings,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        removeFromPlaylist,
        handleAddRating,
        handleDeleteRating
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;