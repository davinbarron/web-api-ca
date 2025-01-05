export const getMovies = async (page = 1) => {
  const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movies?page=${page}`, {
          headers: {
              Authorization: window.localStorage.getItem('token'),
          },
      });
  return await response.json();
};

  
export const getMovie = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  return response.json();
};

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/upcoming', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    });
    return response.json();
  };
  

  export const getTopRatedMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/top-rated', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    });
    return response.json();
  };
  

  export const getTrendingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/trending', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    });
    return response.json();
  };
  
  
  export const getMovieRecommendations = ({ queryKey }) => { 
    const [, { id, page = 1 }] = queryKey; 
    return fetch( 
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}` 
    ).then((response) => { 
      if (!response.ok) { 
        return response.json().then((error) => { 
          throw new Error(error.status_message || "Something went wrong"); 
        }); 
      } 
      return response.json(); 
    })
    .catch((error) => { 
      throw error; 
    }); 
  };

  export const getActors = async () => {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/actors`, {
        headers: {
          Authorization: window.localStorage.getItem('token'),
        },
      });
  
    return response.json();
  };
  

  export const getActorDetails = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };  

  export const getMovieVideos = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };
  
  export const getActorCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };
  
  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };
  
  export const getMovieCast = ({queryKey}) => {

    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const addRating = (movieId, rating) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}` // Use this if needed
        },
        body: JSON.stringify({ value: rating })
      }
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    }).catch((error) => {
      throw error;
    });
  };
  
  export const deleteRating = (movieId) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}` // Use this if needed
        }
      }
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    }).catch((error) => {
      throw error;
    });
  };

  export const login = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  
  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  