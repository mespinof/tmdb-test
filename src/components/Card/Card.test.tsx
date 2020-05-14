import React from 'react';

import { mount } from 'enzyme';

import { Card } from './Card';
import { movieDataMock } from '../../api/mock';

describe('Card Tests', () => {
    test('Card Component Mounts', () => {
        const card = mount(<Card movieData={movieDataMock} />);
        expect(card).not.toBe(null);
    });

    test('Card Component Mounts', () => {
        const mockFn = jest.fn();
        const card = mount(<Card movieData={movieDataMock} onClick={mockFn} />);
        card.find('div[className*="cardPoster"]').simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });
});
