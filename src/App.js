import React, { useEffect, useState } from 'react';
import axios from 'axios';


//components:
import Movies from './components/movies';
import SearchBar from './components/searchBar';
import Notify from './components/notify';
import Header from './components/header';

// styling:
import './App.css';

// Helper functions:
import { queryUrl } from './utils/getUrl';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory]= useState('movie')
  const [searchYear, setSearchYear] = useState(2024)

  const getMovies = async searchValue =>{

    try{
      const res =  await axios.get(queryUrl(searchValue, searchCategory, searchYear));
      if(res.data.Search){
        console.log('res', res.data.Search)
        setMovies(res.data.Search)
      }
    }
    catch(err){
      throw err;
    }
    
  }

  useEffect(()=>{
    getMovies(searchValue)

  },[searchValue, searchCategory, searchYear])

  return (
    <>
      
      <div className="App">
        <Header />
        <SearchBar  
          searchCategory={searchCategory}
          setSearchValue={setSearchValue}
          setSearchCategory={setSearchCategory}
          searchYear={searchYear}
          setSearchYear={setSearchYear}
          
        />
        { searchValue? 
          <Movies movies={movies} /> : 
          <Notify/> 
        }
      </div>
    </>
  );
}

export default App;
