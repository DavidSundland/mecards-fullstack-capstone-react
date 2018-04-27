import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header role="banner" id="pageTop">
            <h1>mE-Cards</h1>
            <p className="headerSubtitle">Your quick e-card generator.</p>
        </header>
    )
}
