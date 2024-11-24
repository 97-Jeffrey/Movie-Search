import React from 'react';
import '../../style/searchBar.css'

const TitleSearch =({ setTitle })=>{
    return (
        <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setTitle(e.target.value)}
          ></input>
    )
}

export default TitleSearch