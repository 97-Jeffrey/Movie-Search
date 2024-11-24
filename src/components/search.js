import React from 'react';

import TitleSearch from './Search/TitleSearch';
import TypeSearch from './Search/TypeSearch';
import YearSearch from './Search/YearSearch';

//styling:
import '../style/searchBar.css'



const Search = ({ 
  type, 
  year,
  setTitle, 
  setType,
  setYear
}) =>{

  return (
    <>
      <div className="search">
          <TitleSearch 
            setTitle={setTitle}
          />
          <TypeSearch 
            type={type}
            setType={setType}
          />
          <YearSearch
             year={year}
             setYear={setYear}
          />
      </div>
    </>
  )
}



export default Search;