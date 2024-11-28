import React, { useState } from 'react';

//components:
import Movies from './components/Movie/movies';
import SearchByTitle from './components/Search/searchByTitle';
import SearchById from './components/Search/searchById';
import Notify from './components/notify';
import Header from './components/header';

// styling:
import './App.css';

//hooks:
import useMovies from './hooks/useMovies';

import { noResult, noTitle } from './constant/notification';

function App() {


  const { 
    movies,
    title,
    year,
    type,
    setTitle,
    setType,
    setYear
  }= useMovies()

  const [searchMovieBy, setSearchMovieBy] = useState('title')




  return (
    <>
      
      <div className="App">
        <Header 
          searchMovieBy={searchMovieBy}
          setSearchMovieBy={setSearchMovieBy}
        />

        {
          searchMovieBy ==='title'?
          <SearchByTitle  
            title={title}
            type={type}
            year={year}
            setTitle={setTitle}
            setType={setType}
            setYear={setYear}
          />
            :
          <SearchById />
        }

        { 
          movies.length && title? 
          <Movies movies={movies} /> : 
          title?
          <Notify text={noResult}/> :
          <Notify text={noTitle}/> 
        }
      </div>
    </>
  );
}

export default App;
