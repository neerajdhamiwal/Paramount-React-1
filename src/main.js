
import React from 'react';
import Headercomp from './component/Header.jsx';
import MobileHeader from './component/mobileHeader.jsx';
import Footer from './component/Footer.jsx';
import $ from 'jquery';
// import requestService from './services/request.js';
// import { Helmet } from 'react-helmet';
// import {apiUrl} from './services/common';


//import 'foundation/js/vendor/zepto';
class Main extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         siteBrand: []
    //     }
    // }
    componentDidMount(){
        // requestService.getService(`/site-brand`)
        //     .then((response) => {
        //         this.setState({SiteBrand :response.data},()=> {
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div className="app">
                {/*<Helmet>*/}
                    {/*<link rel='shortcut icon' href={`${apiUrl+this.state.siteBrand[0]['field_favicon']}`}/>*/}
                {/*</Helmet>*/}
            <MobileHeader/>
                <div className="App-intro">
                {/*<Headercomp logo = {this.state.siteBrand[0].field_site_logo}/>*/}
                <Headercomp/>
                    <main>{this.props.children}</main>
                    {/*<FooterRowSlider/>*/}
                <Footer/>
            </div>
            </div>
        )
    }
}

export default Main;
