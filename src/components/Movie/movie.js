import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//styling:
import '../../style/movie.css'

const Movie = ({ movie }) =>{

  const [movieOpen, setMovieOpen] = useState(false)
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/movies/${movie.imdbID}`);
  };

  return (
    <div className="movie" onClick={goToMovie}>
      
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
          {
          movieOpen? 
            <div>Hide {movie.Type} Id: &nbsp;{movie.imdbID}</div> :
            <div>Display {movie.Type} Id</div>
          } 
        </div>

        {/* {movieOpen && <div>{movie.imdbID}</div>} */}
      </div>

      
    </div>
  )
}



export default Movie;