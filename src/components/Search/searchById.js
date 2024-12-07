import React, { useState } from 'react';
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import Movie from '../Movie/movie';

const SearchById = () =>{

    const [id, setId] = useState('')
    const { movie, error } = useMovie(id)
  
    return (
        <>
            <div className="search">
                <IdSearch
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