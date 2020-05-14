import React from 'react';

import { TextField } from '@material-ui/core';

import classes from './Header.scss';

export const Header = props => {
    const handleChange = e => {
        props.onSearch(e.target.value);
    };

    return (
        <div className={classes.headerContainer}>
            <p>TMDB Test</p>
            <div>
                <TextField
                    label={'Search for movies'}
                    placeholder={'Star wars...'}
                    className={classes.searchInput}
                    onChange={handleChange}
                ></TextField>
            </div>
        </div>
    );
};
