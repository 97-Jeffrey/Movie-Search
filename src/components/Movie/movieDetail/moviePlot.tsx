import React from 'react';
import styles from  '../../../style/moviePage.module.css'

import { notFound } from '../../../utils/movie';

interface MoviePlotInterface {
    value: string
}

const MoviePlot: React.FC<MoviePlotInterface> = ({ value }) : React.ReactNode  =>{
    return(
        <div className={styles.movie_plot}>
            {notFound(value)}
        </div>
    )
}

export default MoviePlot