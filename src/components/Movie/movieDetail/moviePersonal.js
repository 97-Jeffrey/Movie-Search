import React from 'react';
import styles from  '../../../style/moviePage.module.css'

import { noneValue } from '../../../utils/movie';

const MoviePersonal = ({ title, value, type }) =>{
    return(
        <div className={styles.movie_personal}>
            <div className={styles.movie_personal_title}>{title}</div>

            {type ==='array' && value ?
            <div className={styles.movie_array}>
                {value.split(',').map((each, index)=>(
                    <div className={styles.movie_item} key={index}>
                        {each}
                    </div>
                ))}
            </div>:
            <div>{noneValue(value)}</div>
            }
      
        </div>
    )
}

export default MoviePersonal