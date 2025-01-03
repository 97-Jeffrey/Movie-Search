import React, { useState } from 'react';

// Context:
import { MovieContext } from '../../context/movieContext';
import { useContext } from 'react';

// Components:
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import Movie from '../Movie/movie';


//styles:
import styles from  '../../style/searchBar.module.css'

const SearchById = () =>{

    const { id, setId} = useContext(MovieContext)
    const { movie, error } = useMovie(id)
  
    return (
        <>
            <div className={styles.search}>
                <IdSearch
                    id={id}
                    setId={setId}
                />
            </div>

            {    
                id 
                   &&
                <Movie movie={movie}/>
            }
        </>
    )
}


export default SearchById