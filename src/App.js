import React from 'react';


//components:
import Movies from './components/Movie/movies';
import Search from './components/search';
import Notify from './components/notify';
import Header from './components/header';

// styling:
import './App.css';

//hooks:
import useMovie from './hooks/useMovie';

import { noResult, noTitle } from './constant/notification';

function App() {


  const { 
    movies,
    title,
    year,
    type,
    setTitle,
    setType,
    setYear
  }= useMovie()




  return (
    <>
      
      <div className="App">
        <Header />
        <Search  
          title={title}
          type={type}
          year={year}
          setTitle={setTitle}
          setType={setType}
          setYear={setYear}
          
        />
        {
          movies.length && title? 
          <Movies movies={movies} /> : 
          title?
          <Notify text={noResult}/> :
          <Notify text={noTitle}/> 
      
        }
      </div>
    </>
  );
}

export default App;
