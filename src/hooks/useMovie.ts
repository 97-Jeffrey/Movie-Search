import { useState, useEffect } from "react"
import getMovie from "../api/movie/getMovie"
import { Movie_Detail_Interface } from "../type/movie"

const useMovie = (movieId: string): 
    { movie: Movie_Detail_Interface, 
      error: Boolean | String, 
      loading: Boolean
    } =>{
    const initialMovie: Movie_Detail_Interface ={
        Title: "",
        Released: "",
        Country: "",
        Poster: "",
        Runtime: "",
        Language: "",
        Genre: "",
        Plot: "",
        Actors: "",
        Director: "",
        Writer: "",
        Production: "",
        BoxOffice: "",
        Awards: "",
        DVD: "",
        Rated: "",
        err: "",
        imdbID:"",
        Year: "", 
        Type: "",
    }

    const [movie, setMovie] = useState<Movie_Detail_Interface>(initialMovie)
    const [error, setError] = useState<Boolean| string>(false)
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(()=>{
        setLoading(true)
        getMovie(movieId).then(res=>{
            console.log('res', res)
            setLoading(false)
            if(res.err){
                setMovie(initialMovie)
                setError(res.err)
                
            }else{
                setMovie(res)
            }

         })
    },[movieId])




    return {
       movie,
       error,
       loading
    }
}


export default useMovie