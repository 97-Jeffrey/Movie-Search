import { useState, useEffect } from "react"
import getMovie from "../api/movie/getMovie"

const useMovie = (movieId) =>{

    const [movie, setMovie] = useState({
       
    })


    useEffect(()=>{
        getMovie(movieId).then(res=>{
            setMovie(res)
         })
    },[movieId])




    return {
       movie
    }
}


export default useMovie