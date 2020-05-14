import React, { useRef, useCallback, useContext, useState, useEffect } from 'react';

import { Rating } from '@material-ui/lab';
import { TextField, Button } from '@material-ui/core';

import classes from './ModalContent.scss';
import { ModalContentProps } from './ModalContentProps';
import { useControlledProp } from '../../hooks/useControlledProp';
import { MovieDataContext } from '../../provider/MovieDataContextProvider';
import { RatedMovie } from '../../api/mapper';

export const ModalContent = ({ movie }: ModalContentProps): React.ReactElement<ModalContentProps> => {
    const [movieId, setMovieId] = useControlledProp<number>(movie.id);
    const [comment, setComment] = useControlledProp<string>(movie.comment);
    const [rating, setRating] = useState<number>(0);
    const { ratedMovieData, setRatedMovieData } = useContext(MovieDataContext);
    const commentFieldRef = useRef<HTMLInputElement>(null);

    const handleRating = useCallback(
        (event, value: number) => {
            const ratedMovies: RatedMovie[] = ratedMovieData;
            const index = ratedMovies.findIndex(movie => movie.id === movieId);
            if (index >= 0) {
                ratedMovies[index] = { ...ratedMovies[index], rating: value };
            } else {
                ratedMovies.push({ ...movie, rating: value });
            }
            setRatedMovieData(ratedMovies);
            setRating(value);
        },
        [ratedMovieData],
    );

    const handleComment = useCallback(() => {
        const ratedMovies: RatedMovie[] = ratedMovieData;
        const index = ratedMovies.findIndex(movie => movie.id === movieId);
        if (index >= 0) {
            ratedMovies[index] = { ...ratedMovies[index], comment: commentFieldRef.current.value };
        } else {
            ratedMovies.push({ ...movie, comment: commentFieldRef.current.value });
        }
        setRatedMovieData(ratedMovies);
        setComment(commentFieldRef.current.value);
    }, [ratedMovieData]);

    useEffect(() => {
        setRating(ratedMovieData.find(ratedMovie => ratedMovie.id === movieId)?.rating || 0);
        setComment(ratedMovieData.find(ratedMovie => ratedMovie.id === movieId)?.comment || null);
    }, [ratedMovieData]);

    return (
        <div className={classes.movieInfoContainer}>
            <div className={classes.poster}>
                <img src={movie.poster} />
            </div>
            <div className={classes.title}>{movie.title}</div>
            <div className={classes.year}>{movie.date}</div>
            <div className={classes.description}>{movie.overview}</div>
            <div className={classes.popularity}>Popularity: {movie.popularity}</div>
            <div className={classes.stars}>
                <p>Rate this movie:</p>
                <Rating name="ratingStars" value={rating} onChange={handleRating} />
            </div>
            <div className={classes.comment}>
                {!comment ? (
                    <>
                        <TextField
                            inputRef={commentFieldRef}
                            className={classes.commentField}
                            label={'Leave a comment'}
                        />
                        <Button variant="contained" className={classes.enterButton} onClick={handleComment}>
                            Enter
                        </Button>
                    </>
                ) : (
                    <div>Comments: {comment}</div>
                )}
            </div>
        </div>
    );
};
