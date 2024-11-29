//styling:
import '../../style/movie.css'

// Actors,
//     Awards,
//     BoxOffice,
//     Country,
//     DVD,
//     Director,
//     Genre,
//     Language,
//     Metascore,
//     Plot,
//     Poster,
//     Production,
//     Rated,
//     Ratings,
//     Released,
//     Runtime,
//     Title,
//     Type,
//     Website,
//     Writer,
//     Year,
//     imdbID,
//     imdbRating,
//     imdbVotes

const MovieDetail = ({
    movie
}) =>{
    return (
        <div className="movie-detail">
            {
                movie.Poster==='N/A'?
                <div className="movie-error"/>:
                <img src={movie.Poster} 
                    className="movie-detail-Poster" 
                    alt={movie.Title}
                />
            }
            <div className="movie-detail-info-class">
                <div className='movie-detail-title'>{movie.Title} &nbsp;({movie.Year})</div>

                <div className='movie-detail-basic-info-container'>
                    <div className='movie-detail-basic-info'>
                    
                        <div className="movie-type">Length: {movie.Runtime}</div> 
                        <div className="movie-type">Language: {movie.Language}</div> 
                        <div className="movie-type">Country: {movie.Country}</div> 
                        <div className="movie-type">Genre: {movie.Genre}</div> 
                        <div className="movie-type">Directed By: {movie.Director}</div> 
                    </div>
                    <div className='movie-detail-basic-info'>
                    
                        <div className="movie-type">Production: {movie.Production}</div> 
                        <div className="movie-type">Awards: {movie.Awards}</div> 
                        <div className="movie-type">Box Office: {movie.BoxOffice}</div> 
                        <div className="movie-type">IMDB Ratiing: {movie.imdbRating}</div> 
                        <div className="movie-type">IMDB Votes: {movie.imdbVotes}</div> 
                    </div>
                </div>

                <div className='movie-detail-plot-container'>
                    {movie.Plot}
                </div>
                

                <div 
                className="movie-button" 
                >
                    <div></div> 
                </div>

                {/* {movieOpen && <div>{movie.imdbID}</div>} */}
            </div>
      
    </div>
    )
}
export default MovieDetail