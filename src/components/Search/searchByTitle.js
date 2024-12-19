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
import { MovieTitleContext } from '../../context/title';


import { noResult, noTitle } from '../../constant/notification';

//styling:
import '../../style/searchBar.css'



const SearchByTitle = () =>{

  const { title, setTitle } = useContext(MovieTitleContext)
 
  const { 
    movies,
    year,
    type,
    setType,
    setYear
  }= useMovies(title, setTitle)

  return (
    <>
      <div className="search">
          <TitleSearch 
            title={title}
            setTitle={setTitle}
          />
          <TypeSearch 
            type={type}
            setType={setType}
          />
          <YearSearch
             year={year}
             setYear={setYear}
          />
      </div>

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