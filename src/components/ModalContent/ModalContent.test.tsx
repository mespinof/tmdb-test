import React from 'react';

import { mount } from 'enzyme';

import { ModalContent } from './ModalContent';
import { movieDataMock, ratedMovieMock } from '../../api/mock';
import { MovieDataContext, defaultValues } from '../../provider/MovieDataContextProvider';

describe('ModalContent Tests', () => {
    test('ModalContent Component Mounts', () => {
        const modalContent = mount(
            <MovieDataContext.Provider value={{ ...defaultValues, ratedMovieData: [ratedMovieMock] }}>
                <ModalContent movie={movieDataMock} />
            </MovieDataContext.Provider>,
        );
        modalContent
            .find('div[className="stars"]')
            .find('input')
            .at(0)
            .simulate('click');
        expect(modalContent).not.toBe(null);
    });
    test('ModalContent Component comments', () => {
        const mockSetRatedMovieData = jest.fn();
        let modalContent = mount(
            <MovieDataContext.Provider
                value={{ ...defaultValues, ratedMovieData: [ratedMovieMock], setRatedMovieData: mockSetRatedMovieData }}
            >
                <ModalContent movie={movieDataMock} />
            </MovieDataContext.Provider>,
        );
        expect(
            modalContent
                .find('div[className="comment"]')
                .childAt(0)
                .contains('TestComment'),
        ).toBe(true);

        modalContent = mount(
            <MovieDataContext.Provider
                value={{
                    ...defaultValues,
                    ratedMovieData: [{ ...ratedMovieMock, comment: null }],
                    setRatedMovieData: mockSetRatedMovieData,
                }}
            >
                <ModalContent movie={movieDataMock} />
            </MovieDataContext.Provider>,
        );
        expect(
            modalContent
                .find('div[className="comment"]')
                .find('div[className*="commentField"]')
                .exists(),
        ).toBe(true);
        expect(
            modalContent
                .find('div[className="comment"]')
                .find('button[className*="enterButton"]')
                .simulate('click')
                .exists(),
        ).toBe(true);
    });
});
