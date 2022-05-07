import React from "react";


const Movie = ({ movie }) =>{

  return (
    <div key ={movie.imdbID}>
      <img src={movie.Poster} alt="" />
      <div>{movie.Title}</div>
      <div>{movie.Year}</div>
      <div>{movie.Type}</div>
    </div>
  )
}



export default Movie;