import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/loading';
import NavigateButton from '../components/UI/Button/navigateButton';

//styling:
import styles from  "../style/moviePage.module.css"

//Hook:
import useMovie from '../hooks/useMovie';

// route:
import { HOME } from '../constant/route';



const Movie  = () =>{
    
    const { id } = useParams();

    const {  movie, loading } = useMovie(id)
    console.log('movie', movie)


    return (
        <>
          {
            loading?
            <Loading />
              :
            <div className={styles.movie_detail}>
              <NavigateButton text='Back' url={HOME}/>
              <div className={styles.movie_detail_title}>{movie.Title}</div>
              <div className={styles.movie_date}>Date: {movie.Released}</div>
              <div className={styles.avatar_container}>
                <img className={styles.movie_avatar} src={movie.Poster} />
                <div className={styles.movie_detail_container_1}>
                  <div className={styles.movie_detail_container_small}>
                      <div className={styles.movie_detail_container_title}>Length</div>
                      <div>{movie.Runtime}</div>
                  </div>

                  <div className={styles.movie_detail_container_small}>
                      <div className={styles.movie_detail_container_title}>IMDB Rating</div>
                      <div>{movie.imdbRating}</div>
                  </div>

                  <div className={styles.movie_detail_container_small}>
                      <div className={styles.movie_detail_container_title}>Genre</div>
                      <div>{movie.Genre}</div>
                  </div>


                </div>
              </div>

              <div className={styles.movie_plot}>
                {movie.Plot}
              </div>

              <div className={styles.movie_personal}>
                <div className={styles.movie_personal_title}>DIRECTOR</div>
                <div>{movie.Director}</div>
              </div>

              <div className={styles.movie_personal}>
                <div className={styles.movie_personal_title}>WRITER</div>
                <div>{movie.Writer}</div>
              </div>

              {movie.Production !== 'N/A' 
                &&
              <div className={styles.movie_personal}>
                <div className={styles.movie_personal_title}>PRODUCTIONS</div>
                <div>{movie.Director}</div>
              </div>}

            </div>
          }
        </>
    )
}

export default Movie
