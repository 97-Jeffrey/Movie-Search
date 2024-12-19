import React, { useState } from 'react';

//context:
import { MovieSearchByContext } from '../context/movie';
import { useContext } from 'react';

//components:
import SearchByTitle from '../components/Search/searchByTitle';
import SearchById from '../components/Search/searchById';
import Header from '../components/header';


// styling:
import '../App.css';

function Home() {

  const { searchMovieBy, setSearchMovieBy } = useContext(MovieSearchByContext)





  return (
    <>
      
      <div className="App">
        <Header 
          searchMovieBy={searchMovieBy}
          setSearchMovieBy={setSearchMovieBy}
        />

        {
          searchMovieBy ==='title'?
          <SearchByTitle/>
            :
          <SearchById />
        }

      </div>
    </>
  );
}

export default Home;
