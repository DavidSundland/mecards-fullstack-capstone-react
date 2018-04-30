import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function PreviewParent(props) {
    return (
        <div id="previewParent" className="invisible">
            <div id="cardPreview">
                <div id="previewHeader"></div>
                <p id="previewBody" className="previewBody"></p>
                <p id="previewFooter"></p>
                <p id="previewCreds"></p>
                <button id="closePreview" className="closePreview">Close Preview</button>
            </div>
        </div>
    )
}
