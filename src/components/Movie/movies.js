import React from "react";

//Components:
import Movie from './movie';

//styling:
import "../../style/movies.css"

const Movies = ({ movies }) =>{

  return (
    <div className="movies">
      {movies.map((movie, index)=>{
        return (
          <Movie
            key={index}
            movie={movie}
          />
        )
      })}
    </div>
  )
}



export default Movies;