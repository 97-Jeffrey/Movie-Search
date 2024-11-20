import React from 'react';

import TitleSearch from './Search/TitleSearch';

//styling:
import '../style/searchBar.css'
import TypeSearch from './Search/TypeSearch';


const SearchBar = ({ searchCategory, setSearchValue, setSearchCategory }) =>{

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
      </div>
    </>
  )
}



export default SearchBar;