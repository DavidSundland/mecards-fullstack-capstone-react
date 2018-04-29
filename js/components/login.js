import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Login(props) {
    return (
        <form id="login">
            <div className="row">
                <div className="col-6 loginLabel">Username:</div>
                <div className="col-6 loginInput"><input name="signinUserName" placeholder="testuser" autoComplete="off" /></div>
            </div>
            <div className="row">
                <div className="col-6 loginLabel">Password:</div>
                <div className="col-6 loginInput"><input name="signinPassword" placeholder="testpassword" autoComplete="off" /></div>
            </div>
            <div className="row loginButtons">
                <button id="loginClicked" type="submit">Submit</button><button id="newUserButton">New User?</button>
            </div>
        </form>
    )
}
