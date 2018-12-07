
import React from 'react';
import Headercomp from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import Footer from '../component/Footer.jsx';
import bannerAwarBgImg from '../assets/img/award-banner-bg.png';
import smallImg from '../assets/img/small-img.png';
import {jsonMiddleware} from '../services/common';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import WOW from 'wowjs';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Expertise extends React.Component{
    constructor(){
        super()
        this.state = {
            ExpertiseData: {}
        }
    }
    componentWillMount(){
            requestService.getService('/landing-page-data/20')
                .then((response) => {
                let ids = ['slider_id','flipper_id','logo_id','sub_block_id','image_description_id','hd_id'];
                    this.setState({ExpertiseData: jsonMiddleware(response.data, ids)});
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    componentDidMount(){
        $(document).foundation();
        new WOW.WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        ).init();
    }
    render(){
        return( this.state.ExpertiseData.hasOwnProperty('flipper_id')?<div>
                <section className="main-banner award-banner">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>{this.state.ExpertiseData['flipper_id'][0][0].node_title}</span><br/>{this.state.ExpertiseData['flipper_id'][0][0].node_subtitle_title}</h3>
                                {/*<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>*/}
                                <p>{$(this.state.ExpertiseData['flipper_id'][0][0].node_description).text()}</p>
                            </div>
                            <div className="medium-6 cell">
                                <img src={bannerAwarBgImg} alt=""/>
                            </div>

                        </div>

                    </div>
                </section>
                <div className="banner-img-link">
                    <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
                        {
                            this.state.ExpertiseData['flipper_id'][0].map((flip) => {
                                {/*return <div className="cell wow fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={apiUrl+flip.image_flipper_image} alt=""/></a></div>*/}
                                return <div className="cell wow shrink fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={smallImg} alt=""/></a></div>
                            })
                        }
                    </div>
                </div>
                <div className="top-100 bottom-100 clearfix"></div>
                <AccordionTab sliderData = {this.state.ExpertiseData['slider_id'][0]}/>
                <div className="top-100 bottom-100 clearfix"></div>
            </div>: ''

        )
    }
}
export default Expertise;
