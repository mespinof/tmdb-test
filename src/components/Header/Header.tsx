import React from 'react';

import { TextField } from '@material-ui/core';

import classes from './Header.scss';
import { HeaderProps } from './HeaderProps';

export const Header = (props: HeaderProps): React.ReactElement<HeaderProps> => {
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
