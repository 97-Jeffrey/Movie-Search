import { createContext , useState } from "react"

const MovieContext = createContext();


const MovieProvider = ({ children }) =>{
  
    const [title, setTitle] = useState('')
    const [type, setType]= useState('movie');
    const [year, setYear] = useState(2024);
    const [id, setId] = useState('')
    const [searchMovieBy, setSearchMovieBy] = useState('title')


    return (
        <MovieContext.Provider 
           value={{ 
            title, 
            type, 
            year,
            id, 
            searchMovieBy,
            
            setTitle, 
            setType,
            setYear, 
            setId, 
            setSearchMovieBy 
            }}
        >
          {children}
        </MovieContext.Provider>
      );

}

export { MovieProvider, MovieContext };


