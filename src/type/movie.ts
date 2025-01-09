export interface Movie_Detail_Interface {
    Title: string,
    Released: string,
    Country: string,
    Poster: string,
    Runtime: string,
    Language: string,
    Genre: string,
    Plot: string,
    Actors: string,
    Director: string,
    Writer: string,
    Production: string,
    BoxOffice: string,
    Awards: string,
    DVD: string,
    Rated: string,
    err: string,
    imdbID: string,
    Year: string, 
    Type: string,
}


export interface Movie_Interface {
    Title: string,
    Year: string, 
    Type: string,
    imdbID: string,
    Poster: string
}

export type Movies_Interface =  Movie_Interface[]
