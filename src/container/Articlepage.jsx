
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
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';


const BannerStyle =(url)=> {
    let combinedurl = apiUrl+url
    return {
        backgroundImage: `url(${combinedurl})`
    }
};
//import 'foundation/js/vendor/zepto';
class ArticlePage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            caseStudy: []
        }
    }
    componentWillMount(){
        console.log(this.props.location.query);
        requestService.getService(`/case-study-content-data/${this.props.location.search.substring( this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
            this.setState({caseStudy: response.data[0]})
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }

    render(){
        return(
            <div>
            <section className="main-banner banner-with-content article-banner" style={BannerStyle(this.state.caseStudy.field_featured_image)}>
         <div className="grid-container">
           <div className="grid-x align-right align-middle grid-margin-x">
             <div className="medium-10 cell small-order-change">
               <h3 className="banner-info"><span>{this.state.caseStudy.title}</span><br/>
             </h3>
             </div>
           </div>
         </div>
       </section>
       <section className="left-image-right-content top-100 bottom-100">
         <div className="grid-container custom-grid custom-grid-right">
           <div className="grid-x grid-padding-x pl-155">
             <div className="medium-6 small-12 cell">
               <div className="pr-155 ">
                   {$(this.state.caseStudy.field_body).text()}
               </div>
           </div>
         <div className="medium-6 cell no-padding article-top-content hide-for-small-only">
           <div className="img-relative-title-ld">
             <img src={apiUrl+this.state.caseStudy.field_basic_image} className="" alt=""/>
           </div>
         </div>
       </div>
             </div>
       </section>
       <section className="tab-accordion top-100 bottom-100 content-with-sidemenu">
          <div className="grid-container  custom-grid custom-grid-right">
            <div className="grid-x">
            <div className="medium-12 cell">
              <div className="sidemnu-heading pl-155 pr-155 pb-50">
                <h3>We had a belief and passion for what we built and a drive to bring that into the world. And so we founded arch Motorcycle.</h3>
                <p>Lorem ipsum</p>
              </div>
              <div className="tabs-content" data-tabs-content="service-tabs">
                <div className="tabs-panel is-active" id="panel1">
                  <div className="grid-x grid-padding-x pl-155">
                  <div className="medium-6 cell">
                    <div className="pr-155 ">
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                </div>
                <div className="medium-6 small-12 cell no-padding article-top-content">
                  <div className="right-sidemenu">
                    <ul>
                      <li><a href="#">Banking</a></li>
                      <li><a href="#">Hospitality</a></li>
                      <li><a href="#">e-Commerce</a></li>
                      <li><a href="#">Administration</a></li>
                      <li><a href="#">Media</a></li>
                      <li><a href="#">Entertainment</a></li>
                    </ul>
                  </div>
                <div className="img-relative-title-ld hide-for-small-only">
                  <h2 className="relative-title">Article</h2>
                </div>
                </div>
              </div>
                </div>
              </div>
            </div>

            </div>
          </div>

        </section>

            </div>
        )
    }
}
export default ArticlePage;
