import { useEffect, useState } from 'react';

// Fetch API:
import getMovies from '../api/movie/getMovies';

// Context:
import { useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const useMovies = () =>{

    const { title, type, year } = useContext(MovieContext)
     
    const [movies, setMovies] = useState([]);


    useEffect(()=>{
         getMovies(title, type, year)
         .then(res=>{
            setMovies(res)
         })
    },[title, type, year])


    return {
        movies
    }
}

export default useMovies