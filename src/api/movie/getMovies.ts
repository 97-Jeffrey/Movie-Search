import { queryUrl } from "../../utils/getUrl";
import axios from 'axios';
import { Movie_Interface } from "../../type/movie";

const getMovies = async (title: string, type: string, year: number): Promise<Movie_Interface[]> =>{
    

    try{
      const res =  await axios.get(queryUrl(title, type, year));
      console.log('res', res)
      return res?.data?.Search ?? []
    }
    catch(err){
      throw err;
    }
    
}

export default getMovies