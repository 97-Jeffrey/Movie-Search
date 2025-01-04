import React from 'react';
import { useParams } from 'react-router-dom';

// components: 
import Loading from '../components/loading';
import MovieDetail from '../components/Movie/movieDetail';

// hook:
import useMovie from '../hooks/useMovie';


const Movie  = () =>{
    
    const { id } = useParams();
    const {  movie, loading } = useMovie(id)
    console.log('movie', movie)

    return (
        <>
          {
            loading?
            <Loading /> :
            <MovieDetail movie={movie}/>
          }
        </>
    )
}

export default Movie
