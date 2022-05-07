import React from "react";
import Movie from './movie';

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