import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PrevCards from './prevcards';

describe('<PrevCards />', () => {
    it('Renders without crashing', () => {
        shallow(<PrevCards />);
                });
    });
