import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LazyRoute } from './LazyRoute/LazyRoute';
import { Header } from '../components/Header/Header';

export function AppRouter() {
    return (
        <Router>
            <Header
                links={[
                    { route: '/', name: 'Main' },
                    { route: '/about', name: 'About' },
                    { route: '/info', name: 'Info' },
                ]}
            />
            <Switch>
                <LazyRoute exact path="/" componentName={'Main'} />
                <LazyRoute path="/about" componentName={'AboutPage'} />
                <LazyRoute path="/info" componentName={'InfoPage'} />
            </Switch>
        </Router>
    );
}
