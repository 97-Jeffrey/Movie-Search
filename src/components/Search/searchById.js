import React, { useState } from 'react';

// Context:
import { MovieIdContext } from '../../context/id';
import { useContext } from 'react';

// Components:
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import Movie from '../Movie/movie';

const SearchById = () =>{

    const { id, setId} = useContext(MovieIdContext)
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