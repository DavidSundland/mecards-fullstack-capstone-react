import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Intro from '../js/components/intro';
import Login from '../js/components/login';
import Footer from '../js/components/footer';
import NewUser from '../js/components/newuser';
import PrevCards from '../js/components/prevcards';
import MyAlert from '../js/components/myalert';
import UserCard from '../js/components/usercard';


document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Header />, document.getElementById('reactHeader'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Intro />, document.getElementById('reactIntro'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Login />, document.getElementById('reactLogin'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<Footer />, document.getElementById('reactFooter'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<NewUser />, document.getElementById('reactNewUser'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<PrevCards />, document.getElementById('reactPrevCards'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<MyAlert />, document.getElementById('reactMyAlert'));
});

document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render(<UserCard />, document.getElementById('reactUserCard'));
});
