import React from 'react';
import { useState } from 'react';

// context
import { MovieTitleContext, MovieIdContext, MovieSearchByContext } from './context/movie';

//pages:
import Home from './page/home';
import Movie from './page/movie'

import { Routes, Route } from "react-router-dom";

// styling:
import './App.css';

function App() {

  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [searchMovieBy, setSearchMovieBy] = useState('title')


  return (
    <>
      <MovieTitleContext.Provider value={{ title, setTitle }}>
        <MovieIdContext.Provider value={{ id, setId }}>
          <MovieSearchByContext.Provider value={{ searchMovieBy, setSearchMovieBy}}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movies/:id" element={<Movie />} />
              {/* <Route path="*" element={<NotFound />} />  */}
            </Routes>
          </MovieSearchByContext.Provider>
        </MovieIdContext.Provider>
      </MovieTitleContext.Provider>
    </>
  );
}

export default App;
