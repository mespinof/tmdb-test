import React, { useState, useCallback, useContext } from 'react';

import { Header } from '../components/Header/Header';
import classes from './Main.scss';
import { Card } from '../components/Card/Card';
import { Modal } from '../components/Modal/Modal';
import { ModalContent } from '../components/ModalContent/ModalContent';
import { getMovies } from '../api/api';
import { mapMovieData, MovieData } from '../api/mapper';
import { MovieDataContext } from '../provider/MovieDataContextProvider';
import { CircularProgress } from '@material-ui/core';

export function Main() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<MovieData>(null);
    const { movieData, setMovieData, ratedMovieData, setRatedMovieData } = useContext(MovieDataContext);

    const handleOpen = useCallback(() => {
        setOpenModal(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpenModal(false);
    }, []);

    const onSearch = useCallback(async (query: string | null) => {
        setLoading(true);
        try {
            const dataResponse = await getMovies(query);
            setMovieData(mapMovieData(!!dataResponse ? dataResponse : null));
        } catch (e) {
            return;
        }
        setLoading(false);
    }, []);

    const onClickCard = useCallback((movie: MovieData) => {
        setSelectedMovie(movie);
        handleOpen();
    }, []);

    return (
        <div style={{ height: 'auto' }}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Header onSearch={onSearch} />
                </div>
                <div className={classes.content}>
                    {movieData ? (
                        movieData.map((movie, index) => {
                            return <Card key={movie + index} movieData={movie} onClick={onClickCard} />;
                        })
                    ) : (
                        <div className={classes.fallback}>
                            {loading ? <CircularProgress /> : <p>Search for some titles!</p>}
                        </div>
                    )}
                </div>
                <Modal open={openModal} onClose={handleClose} className={classes.modal}>
                    <ModalContent movie={selectedMovie} />
                </Modal>
            </div>
        </div>
    );
}
