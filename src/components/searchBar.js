import React from 'react';

import TitleSearch from './Search/TitleSearch';
import TypeSearch from './Search/TypeSearch';

//styling:
import '../style/searchBar.css'



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