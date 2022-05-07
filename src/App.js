import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movies from './components/movies';
import SearchBar from './components/searchBar';

import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=bdedf3e0`)
      .then(res=>{
        console.log(res)
        if(res.data.Search){
          setMovies(res.data.Search)
        }
        })
      .catch(err=>{
        console.log(err)
      })

  },[searchValue])

  return (
    <div className="App">
      <SearchBar  
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
