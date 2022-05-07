import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movies from './components/movies';

import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  useEffect(()=>{
      axios.get(`http://www.omdbapi.com/?s=chi&apikey=bdedf3e0`)
      .then(res=>{
        console.log(res)
        if(res.data.Response ==='False'){
          return
        }
        if(res.data.Search){
          setMovies(res.data.Search)
        }
        })
      .catch(err=>{
        console.log(err)
      })

  },[])

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
