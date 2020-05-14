import React, { ReactElement } from 'react';
import { mount, ReactWrapper } from 'enzyme';

interface TouchEventsMock {
    touches: { clientX: number; clientY: number }[];
}

function TestHook({ callback }): ReactElement {
    callback();
    return null;
}

export function testHook(callback): ReactWrapper {
    return mount(<TestHook callback={callback} />);
}

export function createTouchEventObject({ x = 0, y = 0 }): TouchEventsMock {
    return { touches: [{ clientX: x, clientY: y }] };
}
