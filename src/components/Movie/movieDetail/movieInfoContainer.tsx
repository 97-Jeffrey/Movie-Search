import React from "react";
import MovieInfo from "./movieInfo";
import styles from  '../../../style/moviePage.module.css'

interface MovieInfoContainerInterface{
    info: { title: string, value: string }[]
}

const MovieInfoContainer: React.FC<MovieInfoContainerInterface> = ({ info }): React.ReactNode  => {
    return (
        <div className={styles.movie_detail_container_1}>
            {
                info.map(each=>{
                    return (
                        <MovieInfo {...each} />
                    )
                })
            }

        </div>
    )
}

export default MovieInfoContainer