import React from 'react';

// components:
import TitleSearch from './TitleSearch';
import TypeSearch from './TypeSearch';
import YearSearch from './YearSearch';
import Notify from '../notify';
import Movies from '../Movie/movies';

// hooks:

import useMovies from '../../hooks/useMovies';

// context:
import { useMovieContext } from '../../hooks/useMovieContext';

// Constants:
import { NO_RESULT, NO_TITLE } from '../../constant/notification';

//styling:
import styles from '../../style/searchBar.module.css'




const SearchByTitle: React.FC = () : React.ReactNode  =>{

  const { title } = useMovieContext()
 
  const { movies }= useMovies()

  return (
    <>
     {/* Movie Search With filters */}
      <div className={styles.search}>
        <TitleSearch />
        <TypeSearch />
        <YearSearch />
      </div>

      {/* Searched Movies */}
      <Movies movies={movies}/>

      { 
        movies.length ? 
        <Movies movies={ movies } /> : 
        <Notify text={ title? NO_RESULT: NO_TITLE }/>
      }
    </>
  )
}



export default SearchByTitle;