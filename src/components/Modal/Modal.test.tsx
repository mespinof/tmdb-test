import React from 'react';

import { mount } from 'enzyme';

import { Modal } from './Modal';

describe('Modal Tests', () => {
    test('Modal Component Mounts', () => {
        const modal = mount(
            <Modal open={true}>
                <div>Test</div>
            </Modal>,
        );
        expect(modal).not.toBe(null);
    });
    test('Modal Component Mounts', () => {
        const mockFn = jest.fn();
        const modal = mount(
            <Modal open={true} onClose={mockFn}>
                <div>Test</div>
            </Modal>,
        );
        modal.find('div[className*="closeButton"]').simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });
});
