import { act } from 'react-dom/test-utils';

import { testHook } from '../utils/testing';
import { useControlledProp } from './useControlledProp';

describe('Hooks', () => {
    describe('useControlledProp', () => {
        let controlledProp;
        let setControlledProp;
        beforeEach(() => {
            testHook(() => {
                [controlledProp, setControlledProp] = useControlledProp(false);
            });
        });
        test('Should start with the initial value', () => {
            expect(controlledProp).toBe(false);
        });
        test('Should change as expected', () => {
            act(() => {
                setControlledProp(true);
            });
            expect(controlledProp).toBe(true);
        });
    });
});
