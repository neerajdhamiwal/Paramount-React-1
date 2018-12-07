
import React from 'react';
import Header from '../component/Header.jsx';
import AwardBanner from '../component/AwardBanner.jsx';
import GridList from '../component/GridList.jsx';



import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Contact extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
          <div>
            <AwardBanner customClass = "main-banner award-banner"></AwardBanner>
            <div className="top-100 bottom-100 clearfix"></div>
            <section className="left-image-right-content top-100 bottom-100 contact-us-page">
      <div className="grid-container custom-grid custom-grid-left lp-row-none">
        <div className="grid-x align-middle">
            <div className="large-7 cell no-padding">
              <div className="img-relative-title-ru">
              <h2 className="relative-title">We are Here</h2>

            </div>
            </div>
            <div className="large-5 cell">
              <div className="content-inner pl-155">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <p className="ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
            </div>
          </div>
    </section>

          </div>
        )
    }
}
export default Contact;
