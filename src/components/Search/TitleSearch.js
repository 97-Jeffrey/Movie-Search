import React from 'react';
import '../../style/searchBar.css'

const TitleSearch =({ setSearchValue })=>{
    return (
        <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setSearchValue(e.target.value)}
          ></input>
    )
}

export default TitleSearch