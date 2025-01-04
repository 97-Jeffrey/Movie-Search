import React from 'react';
import styles from  '../../../style/moviePage.module.css'

import { notFound } from '../../../utils/movie';

const MoviePlot = ({ value }) =>{
    return(
        <div className={styles.movie_plot}>
            {notFound(value)}
        </div>
    )
}

export default MoviePlot