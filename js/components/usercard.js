import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function UserCard(props) {
    return (
        <div className="userCard invisible">
        <form>
            <input name="photoQuery" id="photoQuery" placeholder="Image search term" />
            <button type="submit" id="querySubmit">Submit</button><br />
            <button id="prevPhoto" className="invisible">Prev. Image</button>
            <button id="nextPhoto" className="invisible">Next Image</button>
        </form>

        <div className="row">
            <div className="col-3">
                <button className="styleButton tooltip leftButton" id="prevTitleFont"><span className="tooltiptext toptip">Prev title font</span><span className="oneFont">a</span><span className="twoFont">a</span><span className="threeFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextTitleFont"><span className="tooltiptext toptip">Next title font</span><span className="threeFont">a</span><span className="twoFont">a</span><span className="oneFont">a</span></button>
                <button className="styleButton tooltip leftButton" id="prevTitleColor"><span className="tooltiptext toptip">Prev title color</span><span className="oneColor">a</span><span className="twoColor">a</span><span className="threeColor">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextTitleColor"><span className="tooltiptext toptip">Next title color</span><span className="threeColor">a</span><span className="twoColor">a</span><span className="oneColor">a</span></button>
            </div>
            <div className="col-6">
                <input type="text" name="titleText" id="titleText" placeholder="Header text" onKeyUp={createCard.changeHeader} />
                </div>
                <div className="col-3">
                <button className="styleButton tooltip leftButton" id="smallerTitle"><span className="tooltiptext toptip">Smaller title</span>a<span className="mediumFont">a</span><span className="smallFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="largerTitle"><span className="tooltiptext toptip">Larger title</span><span className="smallFont">a</span><span className="mediumFont">a</span>a</button>
                <button className="styleButton tooltip leftButton" id="prevHeaderStyle"><span className="tooltiptext toptip">Prev drop shadow</span>a<span className="oneStyle">a</span><span className="twoStyle">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextHeaderStyle"><span className="tooltiptext toptip">Next drop shadow</span><span className="twoStyle">a</span><span className="oneStyle">a</span>a</button>
            </div>
        </div>

        <div className="row middleArea">
            <div id="cardBox" className="col-8">
                <div className="cardHeader"><span id="cardHeader">Header (optional)</span></div>
                <img id="photo" src="https://mecards-fullstack-capstone.herokuapp.com/images/blackbackground.jpg" />
                <div className="cardBody"><span  id="cardBody">Body text (optional).  Header, body, & footer are all optional.  If you want the header, body, and/or footer to be blank, place a space in the corresponding text box.</span></div>
                <div className="cardFooter"><span id="cardFooter">Footer (optional)</span></div>
                <div id="photoCreds" className="invisible"></div>
            </div>

            <div className = "col-4 bodyColumn">
                <button className="styleButton tooltip leftButton" id="prevBodyFont"><span className="tooltiptext toptip">Prev body font</span><span className="oneFont">a</span><span className="twoFont">a</span><span className="threeFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextBodyFont"><span className="tooltiptext toptip">Next body font</span><span className="threeFont">a</span><span className="twoFont">a</span><span className="oneFont">a</span></button>
                <button className="styleButton tooltip leftButton" id="prevBodyColor"><span className="tooltiptext toptip">Prev body color</span><span className="oneColor">a</span><span className="twoColor">a</span><span className="threeColor">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextBodyColor"><span className="tooltiptext toptip">Next body color</span><span className="threeColor">a</span><span className="twoColor">a</span><span className="oneColor">a</span></button>
                <textarea maxLength="400" name="bodyText" id="bodyText" onKeyUp={createCard.changeBody} placeholder="Type your body text"></textarea>
                <button className="styleButton tooltip leftButton" id="smallerBody"><span className="tooltiptext bottomtip">Smaller body</span>a<span className="mediumFont">a</span><span className="smallFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="largerBody"><span className="tooltiptext bottomtip">Larger body</span><span className="smallFont">a</span><span className="mediumFont">a</span>a</button>
                <button className="styleButton tooltip leftButton" id="prevBodyStyle"><span className="tooltiptext bottomtip">Prev drop shadow</span>a<span className="oneStyle">a</span><span className="twoStyle">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextBodyStyle"><span className="tooltiptext bottomtip">Next drop shadow</span><span className="twoStyle">a</span><span className="oneStyle">a</span>a</button>
                <hr />
                <div id="borderButtons">
                    <button className="styleButton borderButton tooltip leftButton" id="prevBorderStyle"><span className="tooltiptext toptip">Prev border style</span>┐╗</button>
                    <button className="styleButton borderButton tooltip rightButton" id="nextBorderStyle"><span className="tooltiptext toptip">Next border style</span>╗┐</button>
                    <button className="styleButton borderButton tooltip leftButton" id="prevBorderColor"><span className="tooltiptext toptip">Prev border color</span><span className="oneColor">┐</span><span className="twoColor">┐</span><span className="threeColor">┐</span></button>
                    <button className="styleButton borderButton tooltip rightButton" id="nextBorderColor"><span className="tooltiptext toptip">Next border color</span><span className="threeColor">┐</span><span className="twoColor">┐</span><span className="oneColor">┐</span></button>
                    <button className="styleButton tooltip leftButton" id="smallerBorder"><span className="tooltiptext toptip">Narrower border</span>▌│</button>
                    <button className="styleButton tooltip rightButton" id="largerBorder"><span className="tooltiptext toptip">Wider border</span>│▌</button>
                    <br />
                    <button className="styleButton tooltip leftButton" id="prevBackground"><span className="tooltiptext bottomtip">Prev background color</span><span className="twoColor">█</span><span className="oneColor">█</span></button>
                    <button className="styleButton tooltip rightButton" id="nextBackground"><span className="tooltiptext bottomtip">Next background color</span><span className="oneColor">█</span><span className="twoColor">█</span></button>
                    <br />
                    <button id="preview" className="tooltip goButton"><span className="tooltiptext toptip">Preview the card in the full browser window</span><span className="tooltiptext bottomtip">Note - display size may affect layout</span>PREVIEW CARD</button><button id="saveChanges" className="goButton">SAVE CARD</button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className = "col-3">
                <button className="styleButton tooltip leftButton" id="prevFooterFont"><span className="tooltiptext toptip">Prev footer font</span><span className="oneFont">a</span><span className="twoFont">a</span><span className="threeFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextFooterFont"><span className="tooltiptext toptip">Next footer font</span><span className="threeFont">a</span><span className="twoFont">a</span><span className="oneFont">a</span></button>
                <button className="styleButton tooltip leftButton" id="prevFooterColor"><span className="tooltiptext toptip">Prev footer color</span><span className="oneColor">a</span><span className="twoColor">a</span><span className="threeColor">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextFooterColor"><span className="tooltiptext toptip">Next footer color</span><span className="threeColor">a</span><span className="twoColor">a</span><span className="oneColor">a</span></button>
            </div>
            <div className="col-6">
                <input type="text" name="footertext" id="footertext" onKeyUp={createCard.changeFooter} placeholder="Footer text" />
            </div>
            <div className = "col-3">
                <button className="styleButton tooltip leftButton" id="smallerFooter"><span className="tooltiptext toptip">Smaller footer</span>a<span className="mediumFont">a</span><span className="smallFont">a</span></button>
                <button className="styleButton tooltip rightButton" id="largerFooter"><span className="tooltiptext toptip">Larger footer</span><span className="smallFont">a</span><span className="mediumFont">a</span>a</button>
                <button className="styleButton tooltip leftButton" id="prevFooterStyle"><span className="tooltiptext toptip">Prev drop shadow</span>a<span className="oneStyle">a</span><span className="twoStyle">a</span></button>
                <button className="styleButton tooltip rightButton" id="nextFooterStyle"><span className="tooltiptext toptip">Next drop shadow</span><span className="twoStyle">a</span><span className="oneStyle">a</span>a</button>
            </div>
        </div>
    </div>
    )
}
