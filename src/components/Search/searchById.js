import React, { useState } from 'react';

// Context:
import { MovieContext } from '../../context/movieContext';
import { useContext } from 'react';

// Components:
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import Movie from '../Movie/movie';

const SearchById = () =>{

    const { id, setId} = useContext(MovieContext)
    const { movie, error } = useMovie(id)
  
    return (
        <>
            <div className="search">
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