import React from 'react';
import styles from  '../../../style/moviePage.module.css'

import { noneValue } from '../../../utils/movie';

const MoviePersonal = ({ title, value }) =>{
    return(
        <div className={styles.movie_personal}>
            <div className={styles.movie_personal_title}>{title}</div>
            <div>{noneValue(value)}</div>
        </div>
    )
}

export default MoviePersonal