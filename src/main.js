
import React from 'react';
import Headercomp from './component/Header.jsx';
import MobileHeader from './component/mobileHeader.jsx';
import Footer from './component/Footer.jsx';
import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Main extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div className="app">
            <MobileHeader/>
                <div className="App-intro">
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
