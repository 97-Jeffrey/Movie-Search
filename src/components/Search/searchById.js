import React, { useState } from 'react';

// Context:
import { MovieContext } from '../../context/movieContext';
import { useContext } from 'react';

// Components:
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import Movie from '../Movie/movie';
import Notify from '../notify';

import { NO_RESULT, NO_ID } from '../../constant/notification';


//styles:
import styles from  '../../style/searchBar.module.css'

const SearchById = () =>{

    const { id, setId} = useContext(MovieContext)
    const { movie, error } = useMovie(id)
    console.log('movie!!!', movie)
  
    return (
        <>
            <div className={styles.search}>
                <IdSearch
                    id={id}
                    setId={setId}
                />
            </div>

            {    
                id ?
                movie.Title?
                <Movie movie={movie}/>:
                <Notify text={ NO_RESULT }/>:
                <Notify text={ NO_ID }/>

            }
        </>
    )
}


export default SearchById