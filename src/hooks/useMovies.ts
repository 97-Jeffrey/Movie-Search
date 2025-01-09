import { useEffect, useState } from 'react';

// Fetch API:
import getMovies from '../api/movie/getMovies';

// Context:
import { useMovieContext } from './useMovieContext';

import { Movie_Interface } from '../type/movie';

const useMovies = (): { movies: Movie_Interface[] } =>{

    const { title, type, year } = useMovieContext()
     
    const [movies, setMovies] = useState<Movie_Interface[]>([]);


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