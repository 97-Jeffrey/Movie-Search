import React from 'react';

import TitleSearch from './Search/TitleSearch';
import TypeSearch from './Search/TypeSearch';
import YearSearch from './Search/YearSearch';

//styling:
import '../style/searchBar.css'



const Search = ({ 
  searchCategory, 
  setSearchValue, 
  setSearchCategory,
  searchYear,
  setSearchYear
}) =>{

  return (
    <>
      <div className="search">
          <TitleSearch 
            setSearchValue={setSearchValue}
          />
          <TypeSearch 
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
          />
          <YearSearch
             searchYear={searchYear}
             setSearchYear={setSearchYear}
          />
      </div>
    </>
  )
}



export default Search;