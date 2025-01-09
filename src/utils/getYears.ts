import { FIRST_MOVIE_YEAR } from "../constant/movie";

export const getYears = (): number[] => {
    const currentYear = new Date().getFullYear();

    const years = [];
  
    for (let year = currentYear; year >= FIRST_MOVIE_YEAR; year--) {
      years.push(year);
    }
  
    return years;
  }