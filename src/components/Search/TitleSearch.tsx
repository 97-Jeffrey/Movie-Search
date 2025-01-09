import React from 'react';
import styles from  '../../style/searchBar.module.css'


// Context:
import { useMovieContext } from '../../hooks/useMovieContext';


const TitleSearch: React.FC = () =>{

    const { title, setTitle } =useMovieContext()
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