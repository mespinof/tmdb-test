import React from 'react';

import { mount } from 'enzyme';

import { Header } from './Header';

describe('Header Tests', () => {
    test('Header Component Mounts', () => {
        const mockFn = jest.fn();
        const header = mount(<Header onSearch={mockFn} />);
        expect(header).not.toBe(null);
        header
            .find('div[className*="searchInput"]')
            .find('input')
            .simulate('change', { target: { value: 'testChange' } });

        expect(mockFn).toBeCalledTimes(1);
    });
});
