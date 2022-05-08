import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movies from './components/movies';
import SearchBar from './components/searchBar';
import Notify from './components/notify';

import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) =>{
    try{
      const res =  await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=bdedf3e0`);
      if(res.data.Search){
        console.log(res)
        setMovies(res.data.Search)
      }
    }
    catch(err){
      throw err;
    }
    
  }

  useEffect(()=>{
    getMovies(searchValue)

  },[searchValue])

  return (
    <div className="App">
      <SearchBar  
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {searchValue && <Movies movies={movies} />}
      {!searchValue && <Notify/> }
    </div>
  );
}

export default App;
