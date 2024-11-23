import { firstMovieYear } from "../constant/movieTypes";

export const getYears = ()=> {
    const currentYear = new Date().getFullYear();

    const years = [];
  
    for (let year = currentYear; year >= firstMovieYear; year--) {
      years.push(year);
    }
  
    return years;
  }