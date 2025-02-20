import { getUrlById } from "../../utils/getUrlById";
import { Movie_Detail_Interface } from "../../type/movie";
import axios from 'axios';

const getMovie = async (movieId: string): Promise<Movie_Detail_Interface> =>{

    try{
      const res =  await axios.get(getUrlById(movieId));
      console.log('res', res)
      return res.data.Response ==='False'? { err: res.data.Error}: res.data;
    }
    catch(err){
      throw err;
    }
    
}

export default getMovie