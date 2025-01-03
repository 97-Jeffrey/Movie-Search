import React from 'react';
import styles from  '../../../style/moviePage.module.css'

// components:
import MovieMain from './movieMain';
import MovieInfoContainer from './movieInfoContainer';
import MoviePersonal from './moviePersonal';
import MoviePlot from './moviePlot';
import NavigateButton from '../../UI/Button/navigateButton';

// route:
import { HOME } from '../../../constant/route';


const MovieDetail = ({ movie }) =>{
    return(
        <>
            <div className={styles.movie_detail}>
              <NavigateButton text='Back' url={HOME}/>
              <MovieMain 
                name={movie.Title}
                date={movie.Released}
                country={movie.Country}
              />
              <div className={styles.avatar_container}>
                <img 
                    className={styles.movie_avatar} 
                    src={movie.Poster} 
                    alt={'Movie Avatar'}
                />

                <MovieInfoContainer 
                  info={[
                    { title: 'Length', value: movie.Runtime },
                    { title: 'Language', value: movie.Language },
                    { title: 'Genre', value: movie.Genre },
                  ]}
                />
              </div>

              <MoviePlot value={movie.Plot} />
              <MoviePersonal title='ACTORS' value={movie.Actors}/>
              <MoviePersonal title='DIRECTORS' value={movie.Director}/>
              <MoviePersonal title='WRITER' value={movie.Writer}/>
              <MoviePersonal title='PRODUCTIONS' value={movie.Production}/>
              <br></br>
              <br></br>
              <NavigateButton text='Back' url={HOME}/>
    
            </div>
        </>
        
    )
}

export default MovieDetail