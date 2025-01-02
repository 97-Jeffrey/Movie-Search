import React from 'react';
import '../../style/searchBar.css'


// Context:
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';


const TitleSearch = () =>{

    const { title, setTitle } = useContext(MovieContext)
    return (
        <input
            data-testid="search-input"
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setTitle(e.target.value)}
            value={title}
          ></input>
    )
}

export default TitleSearch