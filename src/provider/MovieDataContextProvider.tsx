import React, { createContext, useState } from 'react';
import { MovieData, RatedMovie } from '../api/mapper';

export const defaultValues = {
    movieData: [],
    setMovieData: null,
    ratedMovieData: [],
    setRatedMovieData: null,
};

export const MovieDataContext = createContext(defaultValues);

export const MovieDataContextProvider = props => {
    const [movieData, setMovieData] = useState<MovieData[]>(props.movieData);
    const [ratedMovieData, setRatedMovieData] = useState<RatedMovie[]>([]);
    return (
        <MovieDataContext.Provider
            value={{
                ...defaultValues,
                movieData,
                setMovieData,
                ratedMovieData,
                setRatedMovieData,
            }}
        >
            {props.children}
        </MovieDataContext.Provider>
    );
};
