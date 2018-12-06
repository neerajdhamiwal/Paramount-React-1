
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

          </div>
        )
    }
}
export default Contact;
