import React from 'react';

const SearchBar = ({ setSearchValue }) =>{

  return (
    <>
      <section className="search">
          <input
            className="radius"
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setSearchValue(e.target.value)}
          >
          </input>
      </section>
    </>
  )
}



export default SearchBar;