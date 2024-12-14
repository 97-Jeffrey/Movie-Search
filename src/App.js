import React from 'react';

//pages:
import Home from './page/home';
import Movie from './page/movie'

import { Routes, Route } from "react-router-dom";

// styling:
import './App.css';

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies/:id" element={<Movie />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </>
  );
}

export default App;
