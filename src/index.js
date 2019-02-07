import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import $ from 'jquery';
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
import indexRoutes from './routes/index.js';
import * as serviceWorker from './serviceWorker';
window.jQuery = $;
window.$ = $;
const hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {indexRoutes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />)}
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
