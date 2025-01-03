import React from 'react';
import styles from  '../../style/searchBar.module.css'


// Context:
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';


const TitleSearch = () =>{

    const { title, setTitle } = useContext(MovieContext)
    return (
        <input
            data-testid={styles.search_input}
            type="text"
            placeholder='Search Movie Name'
            name='Search'
            onChange={e=>setTitle(e.target.value)}
            value={title}
          ></input>
    )
}

export default TitleSearch