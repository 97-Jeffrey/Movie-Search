import React, { useState } from 'react';
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';
import MovieDetail from '../Movie/movieDetail';

const SearchById = () =>{

    const [id, setId] = useState('')
    const { movie, error } = useMovie(id)
    console.log('error', error)
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
                <MovieDetail movie={movie}/>
            }
        </>
    )
}


export default SearchById