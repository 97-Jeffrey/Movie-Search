import React from 'react';

//styling:
import '../style/searchBar.css'


const SearchBar = ({ setSearchValue }) =>{

  return (
    <>
      <div className="search">
          <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setSearchValue(e.target.value)}
          >
          </input>
      </div>
    </>
  )
}



export default SearchBar;