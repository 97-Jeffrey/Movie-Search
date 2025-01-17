import React from 'react';
import styles from  '../../../style/moviePage.module.css'

import { noneValue } from '../../../utils/movie';

interface MovieMainInterface {
    name: string,
    date: string, 
    country: string
}

const MovieMain: React.FC<MovieMainInterface> = ({ name, date, country }) : React.ReactNode  =>{
    return(
        <>
            <div className={styles.movie_detail_title}>{noneValue(name)}</div>
            <div className={styles.movie_date}>Released: {noneValue(date)}</div>
            <div className={styles.movie_date}>Country: {noneValue(country)}</div>
        </>
        
    )
}

export default MovieMain