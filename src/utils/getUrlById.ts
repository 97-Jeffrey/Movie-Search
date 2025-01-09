
export const getUrlById = (movieId: string) => `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`;