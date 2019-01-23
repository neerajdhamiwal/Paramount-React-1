import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';
import 'foundation-sites';
import './assets/css/foundation.css';
import './assets/css/app.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'slick-carousel/slick/slick.css'
import 'what-input';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.theme.green.min.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'slick-carousel';
import * as serviceWorker from './serviceWorker';
window.jQuery = $;
window.$ = $;
ReactDOM.render(
    <App/>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
