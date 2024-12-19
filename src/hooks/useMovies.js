import { useEffect, useState } from 'react';

// Fetch API:
import getMovies from '../api/movie/getMovies';

const useMovies = (title, setTitle) =>{
     
    const [movies, setMovies] = useState([]);
    const [type, setType]= useState('movie');
    const [year, setYear] = useState(2024);

    useEffect(()=>{
         getMovies(title, type, year)
         .then(res=>{
            setMovies(res)
         })
        
    
    },[title, type, year])


    return {
        movies,
        title,
        type,
        year,
        setTitle,
        setType,
        setYear


    }
}

export default useMovies