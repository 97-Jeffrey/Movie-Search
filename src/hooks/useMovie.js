import { useState, useEffect } from "react"
import getMovie from "../api/movie/getMovie"

const useMovie = (movieId) =>{

    const [movie, setMovie] = useState({})
    const [error, setError] =useState(false)


    useEffect(()=>{
        getMovie(movieId).then(res=>{
            console.log('res', res)
            if(res.err){
                setError(res.err)
            }else{
                setMovie(res)
            }

         })
    },[movieId])




    return {
       movie,
       error
    }
}


export default useMovie