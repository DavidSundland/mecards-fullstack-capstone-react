import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Intro(props) {
    return (
        <section className="intro">
            <p> This site allows you to create personalized e-cards, each with their own unique web address.  Create a header, a greeting, and/or a footer, pick a background image, and adjust the fonts and borders to your liking.  Once you are satisfied with your e-card, copy its URL and send it on to your loved one.</p>
        </section>
    )
}
