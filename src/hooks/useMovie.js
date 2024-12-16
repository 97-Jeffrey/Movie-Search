import { useState, useEffect } from "react"
import getMovie from "../api/movie/getMovie"

const useMovie = (movieId) =>{

    const [movie, setMovie] = useState({})
    const [error, setError] =useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        getMovie(movieId).then(res=>{
            console.log('res', res)
            if(res.err){
                setLoading(false)
                setError(res.err)
                
            }else{
                setLoading(false)
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