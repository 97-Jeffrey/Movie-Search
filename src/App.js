import React from 'react';
import { useState } from 'react';

// context
import { MovieTitleContext,  } from './context/title';

//pages:
import Home from './page/home';
import Movie from './page/movie'

import { Routes, Route } from "react-router-dom";

// styling:
import './App.css';

function App() {

  const [title, setTitle] = useState('')


  return (
    <>
      <MovieTitleContext.Provider value={{ title, setTitle }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies/:id" element={<Movie />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </MovieTitleContext.Provider>
    </>
  );
}

export default App;
