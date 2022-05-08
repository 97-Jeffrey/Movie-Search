import React, { useState } from "react";


const Movie = ({ movie }) =>{

  const [movieOpen, setMovieOpen] = useState(false)

  return (
    <div key ={movie.imdbID} className="movie">
      {
        movie.Poster==='N/A'?
          <div className="movie-error"/>:
          <img src={movie.Poster} 
            className="movie-Poster" 
            alt={movie.Title}
          />
      }
      <div className="movie-info-class">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">Released In {movie.Year}</div>
        <div className="movie-type">Type: {movie.Type}</div> 

        <div 
          className="movie-button" 
          onClick={()=>setMovieOpen(!movieOpen)}
        >
          {movieOpen? <div>Hide Movie Id: &nbsp;{movie.imdbID}</div> :"Display Movie Id"} 
        </div>

        {/* {movieOpen && <div>{movie.imdbID}</div>} */}
      </div>
      
    </div>
  )
}



export default Movie;