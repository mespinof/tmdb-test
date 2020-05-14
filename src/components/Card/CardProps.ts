import { MovieData } from './../../api/mapper';
export interface CardProps {
    movieData: MovieData;
    onClick: (movie: MovieData) => void;
}
