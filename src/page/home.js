import React, { useState } from 'react';

//context:
import { MovieContext } from '../context/movieContext';
import { useContext } from 'react';

//components:
import SearchByTitle from '../components/Search/searchByTitle';
import SearchById from '../components/Search/searchById';
import Header from '../components/header';


// styling:
import '../App.css';

function Home() {

  const { searchMovieBy } = useContext(MovieContext)


  return (
    <>
      
      <div className="App">
        <Header />

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
