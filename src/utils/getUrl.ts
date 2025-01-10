
export const queryUrl = (searchValue: string, searchCategory: string, searchYear: number): string =>  `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchValue}&type=${searchCategory}&y=${searchYear}`;