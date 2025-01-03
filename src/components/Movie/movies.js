import React from "react";

//Components:
import Movie from './movie';

//styling:
import  styles from "../../style/movies.module.css"

const Movies = ({ movies }) =>{

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