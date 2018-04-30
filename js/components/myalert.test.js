import React from 'react';
import {shallow, mount, render} from 'enzyme';

import MyAlert from './myalert';

describe('<MyAlert />', () => {
    it('Renders without crashing', () => {
        shallow(<MyAlert />);
                });
    });
