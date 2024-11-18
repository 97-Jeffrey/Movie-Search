
export const returnUrl = searchValue => `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;