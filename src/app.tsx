import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './pages/Main';
import { MovieDataContextProvider } from './provider/MovieDataContextProvider';

ReactDOM.render(
    <MovieDataContextProvider>
        <Main />
    </MovieDataContextProvider>,
    document.getElementById('app'),
);
