import { queryUrl } from "../../utils/getUrl";
import axios from 'axios';

const getMovies = async (title, type, year) =>{
    

    try{
      const res =  await axios.get(queryUrl(title, type, year));
      return res?.data?.Search ?? []
    }
    catch(err){
      throw err;
    }
    
}

export default getMovies