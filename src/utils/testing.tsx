import React, { ReactElement } from 'react';
import { mount, ReactWrapper } from 'enzyme';

function TestHook({ callback }): ReactElement {
    callback();
    return null;
}

export function testHook(callback): ReactWrapper {
    return mount(<TestHook callback={callback} />);
}
