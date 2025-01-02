import React from 'react';
import { useState } from 'react';

// context
import { MovieProvider } from './context/movieContext';

//pages:
import Home from './page/home';
import Movie from './page/movie'

import { Routes, Route } from "react-router-dom";

// styling:
import './App.css';

function App() {



  return (
    <>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies/:id" element={<Movie />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
