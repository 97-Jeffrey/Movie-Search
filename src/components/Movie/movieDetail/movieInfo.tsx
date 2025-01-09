import React from "react";
import styles from  '../../../style/moviePage.module.css'
import { noneValue } from "../../../utils/movie";

interface MoiveInfoInterface {
    title: string, 
    value: string
}

const MovieInfo: React.FC<MoiveInfoInterface> = ({ title, value }) =>{

    return (
        <div className={styles.movie_detail_container_small}>
            <div className={styles.movie_detail_container_title}>{title}</div>
            <div>{noneValue(value)}</div>
        </div>
    )
}

export default MovieInfo