import { getUrlById } from "../../utils/getUrlById";
import axios from 'axios';

const getMovie = async (movieId) =>{
    console.log('movieId', movieId)

    try{
      const res =  await axios.get(getUrlById(movieId));
      console.log('res', res)
      return {}
    }
    catch(err){
      throw err;
    }
    
}

export default getMovie