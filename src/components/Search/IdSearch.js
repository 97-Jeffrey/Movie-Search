import React from 'react';
import '../../style/searchBar.css'

const IdSearch =({ setId })=>{
    return (
        <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Id'
            name='Search'
            onChange={e=>setId(e.target.value)}
        >
        
        </input>
    )
}

export default IdSearch