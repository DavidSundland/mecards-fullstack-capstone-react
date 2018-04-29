import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="contentinfo">
            <div className="left">© David Sundland</div>
            <div className="right"><a href="https://github.com/DavidSundland" target="_blank"> <i className="fab fa-github"></i> </a><a href="https://www.linkedin.com/in/david-sundland" target="_blank"> <i className="fab fa-linkedin"></i> </a><a href="mailto:dsundland@gmail.com"> <i className="far fa-envelope"></i> </a></div>
        </footer>
    )
}
