import React, { useState } from "react";


const Movie = ({ movie }) =>{

  const [movieOpen, setMovieOpen] = useState(false)
  const moviePosterClass = movie.Poster==='N/A'? "movie-error":"movie-Poster";

  return (
    <div key ={movie.imdbID} className="movie">
      <img src={movie.Poster} className={moviePosterClass} alt={movie.Title}/>
      <div className="movie-info-class">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">Released In {movie.Year}</div>
        <div className="movie-type">Type: {movie.Type}</div> 

        <div 
          className="movie-button" 
          onClick={()=>setMovieOpen(!movieOpen)}
        >
          {movieOpen?"Hide Movie Id ":"Display Movie Id"} 
        </div>

        {movieOpen && <div>{movie.imdbID}</div>}
      </div>
      
    </div>
  )
}



export default Movie;