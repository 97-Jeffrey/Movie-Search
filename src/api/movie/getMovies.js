import { queryUrl } from "../../utils/getUrl";
import axios from 'axios';

const getMovies = async (title, type, year) =>{
    

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