import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import './assets/css/foundation.css';
import './assets/css/app.css';
import './assets/css/base.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'slick-carousel/slick/slick.css'
//import  './assets/js/vendor/TweenMax.min';
import 'what-input';
import 'foundation-sites';
import 'wowjs/dist/wow.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.theme.green.min.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'slick-carousel';

// import Home from './container/Homepage';
import App from './app';
ReactDom.render(<App/>
    ,document.getElementById('root'));
