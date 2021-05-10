import React, { useCallback } from 'react';

import classes from './Card.scss';
import { CardProps } from './CardProps';

export const Card = ({ movieData, onClick }: CardProps): React.ReactElement<CardProps> => {
    const handleClick = useCallback(() => {
        onClick(movieData);
    }, [movieData, onClick]);

    return (
        movieData && (
            <div className={classes.cardContainer}>
                <div className={classes.cardPoster} onClick={handleClick}>
                    {movieData.poster && <img className={classes.poster} src={movieData.poster} />}
                </div>
                <div className={classes.movieTitle}>{movieData.title}</div>
                <div className={classes.movieYear}>{movieData.date}</div>
            </div>
        )
    );
};

Card.defaultProps = {
    movieTitle: '',
    movieYear: '',
    posterUrl: '',
    onClick: null,
};
