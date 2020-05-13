import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.scss';

console.log(classes);

export function Header(props) {
    return props.links.map(link => (
        <NavLink className={classes.link} key={link.route} to={link.route}>
            {link.name}
        </NavLink>
    ));
}
