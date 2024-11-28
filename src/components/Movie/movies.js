import React from "react";

//Components:
import Movie from './movie';

//styling:
import "../../style/movies.css"

const Movies = ({ movies }) =>{

  return (
    <div className="movies">
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