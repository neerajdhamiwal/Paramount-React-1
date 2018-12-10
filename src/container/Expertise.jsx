
import React from 'react';
import AccordionTab from '../component/AccordionTab.jsx';
import MainBanner from '../component/MainBanner.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import FooterHeading from '../component/FooterHeading.jsx';
import smallImg from '../assets/img/small-img.png';
import {jsonMiddleware} from '../services/common';
import requestService from '../services/request.js';

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
            requestService.getService(`/landing-page-data/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
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
        return( <div>
                {Object.keys(this.state.ExpertiseData).length>0? <MainBanner node = {this.state.ExpertiseData[Object.keys(this.state.ExpertiseData)[0]][0]}></MainBanner>: ''}
                <div className="banner-img-link">
                    {this.state.ExpertiseData.hasOwnProperty('flipper_id')?<div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
                            {
                                this.state.ExpertiseData['flipper_id'][0].map((flip) => {
                                    {/*return <div className="cell wow fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={apiUrl+flip.image_flipper_image} alt=""/></a></div>*/}
                                    return <div className="cell wow shrink fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={smallImg} alt=""/></a></div>
                                })
                            }
                        </div>:''}
                </div>
                <div className="top-100 bottom-100 clearfix"></div>
                    {this.state.ExpertiseData.hasOwnProperty('slider_id')? <AccordionTab sliderData = {this.state.ExpertiseData['slider_id'][0]}/>:''}
                <div className="top-100 bottom-100 clearfix"></div>
                {this.state.ExpertiseData.hasOwnProperty('sub_block_id')? <FooterHeading subBlockData = {this.state.ExpertiseData['sub_block_id'][0]}/>:''}
                <div className="top-100 bottom-100 clearfix"></div>
            {this.state.ExpertiseData.hasOwnProperty('logo_id')?<FooterRowSlider clientData = {this.state.ExpertiseData['logo_id'][0]}/>:''}
                </div>

        )
    }
}
export default Expertise;
