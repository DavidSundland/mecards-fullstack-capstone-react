import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function PrevCards(props) {
    return (
        <div className="prevCards invisible">
        <div className="prevCardsBox">
                <h2>Your previous cards:</h2>
                <div id="prevCards">
                </div>
            </div>
            <button id="oldUserNewCard">New Card</button>
        </div>    )
}
