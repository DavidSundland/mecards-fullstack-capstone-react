import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Intro from '../js/components/intro';
import Login from '../js/components/login';
import Footer from '../js/components/footer';


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
