import React from "react";

//Components:
import Movie from './movie';

//styling:
import  styles from "../../style/movies.module.css"

import { Movies_Interface } from "../../type/movie";

interface MoviesInterface {
  movies: Movies_Interface
}

const Movies: React.FC<MoviesInterface> = ({ movies }) : React.ReactNode  =>{

  return (
    <div className={styles.movies}>
      {movies.map((movie)=>{
        return (
          <Movie
            key={movie.imdbID}
            movie={movie}
          />
        )
      })}
    </div>
  )
}



export default Movies;