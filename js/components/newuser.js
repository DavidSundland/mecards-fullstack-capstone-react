import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function NewUser(props) {
    return (
        <div className="newUser invisible">
            <div className="newuserBox">
                <h2>Create New User</h2>
                <form id="newUser">
                    <div className="row">
                        <div className="col-6 loginLabel">Username:</div>
                        <div className="col-6 loginInput"><input name="userName" autoComplete="off" /></div>
                    </div>
                    <div className="row">
                        <div className="col-6 loginLabel">Password:</div>
                        <div className="col-6 loginInput"><input name="password" autoComplete="off" /></div>
                    </div>
                    <div className="row">
                        <div className="col-6 loginLabel">Confirm Password:</div>
                        <div className="col-6 loginInput"><input name="passwordConfirm" autoComplete="off" /></div>
                    </div>
                    <div className="row">
                        <button type="submit" id="newUserSubmit">Submit</button>
                    </div>
                </form>
                <button id="cancelNewUser">Cancel</button>
            </div>
        </div>
    )
}
