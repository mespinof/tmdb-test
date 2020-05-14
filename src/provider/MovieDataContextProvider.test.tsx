import React from 'react';

import { mount } from 'enzyme';

import { MovieDataContextProvider } from './MovieDataContextProvider';

describe('MovieDataContextProvider Tests', () => {
    test('MovieDataContextProvider Component Mounts', () => {
        const movieDataContextProvider = mount(<MovieDataContextProvider />);
    });
});
