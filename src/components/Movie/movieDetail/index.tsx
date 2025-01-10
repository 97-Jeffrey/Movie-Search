import React, { useState } from 'react';
import styles from  '../../../style/moviePage.module.css'


// components:
import MovieMain from './movieMain';
import MovieInfoContainer from './movieInfoContainer';
import MoviePersonal from './moviePersonal';
import MoviePlot from './moviePlot';
import NavigateButton from '../../UI/Button/navigateButton';
import ShowButton from '../../UI/Button/showButton';

// route:
import { HOME } from '../../../constant/route';

import { Movie_Detail_Interface } from '../../../type/movie';

interface MovieDetailProps {
  movie: Movie_Detail_Interface
}


const MovieDetail: React.FC<MovieDetailProps> = ({ movie }): React.ReactNode =>{

    const [showMore, setShowMore] = useState<boolean>(false)

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
              <MoviePersonal title='ACTORS' value={movie.Actors} type='array'/>
              <MoviePersonal title='DIRECTORS' value={movie.Director}/>
              <MoviePersonal title='WRITER' value={movie.Writer} type='array'/>
              <MoviePersonal title='PRODUCTIONS' value={movie.Production}/>
              
              {showMore &&
                <>
                  <MoviePersonal title='BOX OFFICE' value={movie.BoxOffice}/>
                  <MoviePersonal title='AWARDS' value={movie.Awards}/>
                  <MoviePersonal title='DVDS' value={movie.DVD}/>
                  <MoviePersonal title='RATES' value={movie.Rated}/>
                </>
              }
              
              <ShowButton 
                  state={showMore}
                  setState={setShowMore}
                  text={`${showMore ?"Less":"More"} Information`}
              />

              <br></br>
              <br></br>
              <NavigateButton text='Back' url={HOME}/>


    
            </div>
        </>
        
    )
}

export default MovieDetail