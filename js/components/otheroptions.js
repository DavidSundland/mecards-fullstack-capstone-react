import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function OtherOptions(props) {
    return (
        <div id="otherOptions" className="otherOptions row">
            <button id="allCards" className="tooltip invisible"><span className="tooltiptext toptip">View all saved cards</span>All Cards</button><button id="newCard" className="tooltip invisible"><span className="tooltiptext toptip">Start from scratch</span>New Card</button>
        </div>
    )
}
