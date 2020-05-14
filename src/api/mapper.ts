const IMAGE_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

export interface MovieData {
    id: number;
    title: string;
    date: string;
    overview: string;
    popularity: string;
    poster: string;
}

export interface RatedMovie extends MovieData {
    rating?: number;
    comment?: string;
}

export function getImage(query: string): string {
    return `${IMAGE_URL}${query}`;
}

export function mapMovieData(data: any[]): MovieData[] {
    const movieData: MovieData[] = [];
    data &&
        data.map(dataItem => {
            const movie: MovieData = {
                id: dataItem.id,
                title: dataItem.title,
                date: dataItem.release_date,
                overview: dataItem.overview,
                popularity: dataItem.popularity,
                poster: dataItem.poster_path ? getImage(dataItem.poster_path) : null,
            };
            movieData.push(movie);
        });
    return movieData;
}
