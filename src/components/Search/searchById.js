import React, { useState } from 'react';
import IdSearch from './IdSearch';
import useMovie from '../../hooks/useMovie';

const SearchById = () =>{

    const [id, setId] = useState('')
    const { movie } = useMovie(id)
    return (
        <>
            <div className="search">
                <IdSearch
                    setId={setId}
                />
           </div>
        </>
    )
}


export default SearchById