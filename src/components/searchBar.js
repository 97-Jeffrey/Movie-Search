import React from 'react';

const SearchBar = ({ searchValue, setSearchValue }) =>{

  return (
    <>
      <section className="search">
        <form action="" className='search__form'>
          <input
            className="radius"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setSearchValue(e.target.value)}
          >
          </input>
        </form>
      </section>
    </>
  )
}



export default SearchBar;