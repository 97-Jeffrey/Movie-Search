import React from "react";

import { useContext } from "react";
import { MovieContext } from "../context/movieContext";


export const useMovieContext = () => {
    const context = useContext(MovieContext);
  
    if (!context) {
      throw new Error("useMovieContext must be used within a MovieProvider");
    }
  
    return context;
};