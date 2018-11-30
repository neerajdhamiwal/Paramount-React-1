
import React from 'react';
import Header from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import Footer from '../component/Footer.jsx';
import mobileHeader from '../component/mobileHeader.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import layerTop from '../assets/img/layertop.png';
import placeholder from '../assets/img/placeholder.png';
import $ from 'jquery';
import BannerImg from '../assets/img/article-banner.jpeg';

var BannerStyle = {
  backgroundImage: 'url(' + BannerImg + ')'
};
//import 'foundation/js/vendor/zepto';
class ArticlePage extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div>
            <section className="main-banner banner-with-content article-banner" style={BannerStyle}>
             <div className="grid-container">
               <div className="grid-x align-right align-middle grid-margin-x">
                 <div className="medium-4 cell small-order-change">
                   <h3 className="banner-info"><span>Case Study 2 </span><br/>
                   Company Name</h3>
                 </div>
               </div>
             </div>
           </section>

            </div>
        )
    }
}
export default ArticlePage;
