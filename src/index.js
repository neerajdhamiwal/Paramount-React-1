import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import './assets/css/app.css';
import './assets/css/base.css';
import './assets/css/foundation.css';
//import  './assets/js/vendor/TweenMax.min';
import 'what-input';
import 'foundation-sites';
import Home from './container/Homepage';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(<BrowserRouter>
    <App/></BrowserRouter>
    ,document.getElementById('root'));

