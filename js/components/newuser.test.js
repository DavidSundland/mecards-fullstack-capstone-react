import React from 'react';
import {shallow, mount, render} from 'enzyme';

import NewUser from './newuser';

describe('<NewUser />', () => {
    it('Renders without crashing', () => {
        shallow(<NewUser />);
                });
    });
