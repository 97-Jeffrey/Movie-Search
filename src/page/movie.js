import React from 'react';
import { useParams } from 'react-router-dom';

import "../style/moviePage.css"

import useMovie from '../hooks/useMovie';

import Loading from './loading';


const Movie  = () =>{
    
    const { id } = useParams();

    const {  movie, loading } = useMovie(id)
    console.log('movie', movie)


    return (
        <>
          {
            loading
              &&
            <Loading />
          }
          {
          !loading 
            &&
          <div className='movie-detail'>
            <div className='movie-detail-title'>{movie.Title}</div>
            <div className='movie-date'>Date: {movie.Released}</div>
            <div className='avatar-container'>
              <img className='movie-avatar' src={movie.Poster} />
              <div className='movie-detail-container-1'>
                <div className='movie-detail-container-small'>
                    <div className='movie-detail-container-title'>Length</div>
                    <div>{movie.Runtime}</div>
                </div>

                <div className='movie-detail-container-small'>
                    <div className='movie-detail-container-title'>IMDB Rating</div>
                    <div>{movie.imdbRating}</div>
                </div>

                <div className='movie-detail-container-small'>
                    <div className='movie-detail-container-title'>Genre</div>
                    <div>{movie.Genre}</div>
                </div>


              </div>
            </div>

            <div className='movie-plot'>
              {movie.Plot}
            </div>

            <div className='movie-personal'>
              <div className='movie-personal-title'>DIRECTOR</div>
              <div>{movie.Director}</div>
            </div>

            <div className='movie-personal'>
              <div className='movie-personal-title'>WRITER</div>
              <div>{movie.Writer}</div>
            </div>

            {movie.Production !== 'N/A' 
               &&
            <div className='movie-personal'>
              <div className='movie-personal-title'>PRODUCTIONS</div>
              <div>{movie.Director}</div>
            </div>}

          </div>
          }
        </>
    )
}

export default Movie
