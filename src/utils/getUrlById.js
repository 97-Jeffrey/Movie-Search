
export const getUrlById = movieId => `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`;