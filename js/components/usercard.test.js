import React from 'react';
import {shallow, mount, render} from 'enzyme';

import UserCard from './usercard';

describe('<UserCard />', () => {
    it('Renders without crashing', () => {
        shallow(<UserCard />);
                });
    });
