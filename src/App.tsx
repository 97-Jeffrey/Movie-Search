import React from 'react';
import { Routes, Route } from "react-router-dom";

// context
import { MovieProvider } from './context/movieContext';

//pages:
import Home from './page/home';
import Movie from './page/movie'

// Route constants:
import { HOME, MOVIE } from './constant/route';


// styling:
import './App.css';

function App() {



  return (
    <>
      <MovieProvider>
        <Routes>
          <Route path={HOME} element={<Home/>} />
          <Route path={MOVIE} element={<Movie />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
