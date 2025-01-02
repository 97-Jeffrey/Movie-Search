import React from 'react';

// components:
import TitleSearch from './TitleSearch';
import TypeSearch from './TypeSearch';
import YearSearch from './YearSearch';
import Notify from '../notify';
import Movies from '../Movie/movies';

// hooks:
import { useContext } from 'react';
import useMovies from '../../hooks/useMovies';

// context:
import { MovieContext } from '../../context/movieContext';

// Constants:
import { noResult, noTitle } from '../../constant/notification';

//styling:
import '../../style/searchBar.css'



const SearchByTitle = () =>{

  const { title } = useContext(MovieContext)
 
  const { movies }= useMovies()

  return (
    <>
     {/* Movie Search With filters */}
      <div className="search">
        <TitleSearch />
        <TypeSearch />
        <YearSearch />
      </div>

      {/* Searched Movies */}
      <Movies movies={movies}/>

      { 
        movies.length ? 
        <Movies movies={movies} /> : 
        <Notify text={title? noResult: noTitle}/>
      }
    </>
  )
}



export default SearchByTitle;