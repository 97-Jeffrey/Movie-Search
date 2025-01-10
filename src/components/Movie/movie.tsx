import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

//styling:
import styles from '../../style/movie.module.css'

import { Movie_Interface, Movie_Detail_Interface } from "../../type/movie";

interface MovieInterface {
  movie:  Movie_Interface | Movie_Detail_Interface
}

const Movie: React.FC<MovieInterface> = ({ movie }) : React.ReactNode  =>{

  const navigate: NavigateFunction = useNavigate();

  const goToMovie = (): void => {
    navigate(`/movies/${movie.imdbID}`);
  };

  return (
    <div className={styles.movie} onClick={goToMovie}>
      
      {
        movie.Poster==='N/A'?
          <div className={styles.movie_error}/>:
          <img src={movie.Poster} 
            className={styles.movie_poster}
            alt={movie.Title}
          />
      }
      <div className={styles.movie_info_class}>
        <div className={styles.movie_title}>{movie.Title}</div>
        <div className={styles.movie_year}> Released In {movie.Year}</div>
        <div className={styles.movie_type}> Type: {movie.Type}</div> 

        
      </div>

      
    </div>
  )
}



export default Movie;