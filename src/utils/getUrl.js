
export const queryUrl = (searchValue, searchCategory, searchYear) => `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}&type=${searchCategory}&y=${searchYear}`;