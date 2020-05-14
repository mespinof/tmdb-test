import React from 'react';

import { mount } from 'enzyme';

import { Main } from './Main';
import { MovieDataContext, defaultValues } from '../provider/MovieDataContextProvider';
import { ratedMovieMock, movieDataMock } from '../api/mock';

describe('Main Tests', () => {
    test('Main Component Mounts', () => {
        const mockSetMovieData = jest.fn();
        let main = mount(
            <MovieDataContext.Provider
                value={{
                    ...defaultValues,
                    movieData: [movieDataMock, movieDataMock],
                    setRatedMovieData: mockSetMovieData,
                }}
            >
                <Main></Main>
            </MovieDataContext.Provider>,
        );
        expect(main).not.toBe(null);
    });
});
