
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
            <section class="main-banner banner-with-content article-banner" style={BannerStyle(this.state.caseStudy.field_featured_image)}>
         <div class="grid-container">
           <div class="grid-x align-right align-middle grid-margin-x">
             <div class="medium-10 cell small-order-change">
               <h3 class="banner-info"><span>{this.state.caseStudy.title}</span><br/>
             </h3>
             </div>
           </div>
         </div>
       </section>
       <section class="left-image-right-content top-100 bottom-100">
         <div class="grid-container custom-grid custom-grid-right">
           <div class="grid-x grid-padding-x pl-155">
             <div class="medium-6 small-12 cell">
               <div class="pr-155 ">
                   {$(this.state.caseStudy.field_body).text()}
               </div>
           </div>
         <div class="medium-6 cell no-padding article-top-content hide-for-small-only">
           <div class="img-relative-title-ld">
             <img src={apiUrl+this.state.caseStudy.field_basic_image} class="" alt=""/>
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
