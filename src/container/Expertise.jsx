
import React from 'react';
import WOW from 'wowjs';
import AccordionTab from '../component/AccordionTab.jsx';
import MainBanner from '../component/MainBanner.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import GridList from '../component/GridList.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import FooterHeading from '../component/FooterHeading.jsx';
import HorizontalScroll from '../component/HorizontalScroll.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import smallImg from '../assets/img/small-img.png';
import {jsonMiddleware, apiUrl, urlString} from '../services/common';
import requestService from '../services/request.js';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
let nid = '';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Expertise extends React.Component{
    constructor(){
        super()
        this.state = {
            ExpertiseData: {},
            loading: true
        }
    }
    componentWillMount(){
        requestService.getService(`/landing-page-data/${urlString[this.props.location.pathname]}`)
                .then((response) => {
                let ids = ['slider_id','flipper_id','logo_id','sub_block_id','image_description_id','hd_id', 'client_slider_id','award_slider_id','certificate_slider_id','partner_slider_id',];
                    nid = urlString[this.props.location.pathname]
                    this.setState({loading: false});
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
        return( this.state.loading? <center >
                    <Loader
                        type="ThreeDots"
                        color="#fd302a"
                        height="100"
                        width="100"
                    />
                </center> : <div>
                {Object.keys(this.state.ExpertiseData).length>0? <MainBanner nid = {nid} node = {this.state.ExpertiseData[Object.keys(this.state.ExpertiseData)[0]][0]}></MainBanner>: ''}
                <div className="banner-img-link">
                    {this.state.ExpertiseData.hasOwnProperty('flipper_id')?<div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
                            {
                                this.state.ExpertiseData['flipper_id'][0].map((flip, i) => {
                                    {/*return <div className="cell wow fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={apiUrl+flip.image_flipper_image} alt=""/></a></div>*/}
                                    return <div className="cell wow shrink fadeInDown banner-image-effect" data-wow-delay={`${i}s`}><a href="#"><img src={apiUrl+flip.image_flipper_image} alt=""/><span>{flip.image_flipper_title}</span></a></div>
                                })
                            }
                        </div>:''}
                </div>
                <div className="top-100 bottom-100 clearfix"></div>
                    {this.state.ExpertiseData.hasOwnProperty('slider_id')? <AccordionTab sliderData = {this.state.ExpertiseData['slider_id'][0]}/>:''}
                    {this.state.ExpertiseData.hasOwnProperty('hd_id')? <HorizontalScroll standardData = {this.state.ExpertiseData['hd_id'][0]}/>:''}
                <div className="top-100 bottom-100 clearfix"></div>
                    {
                        this.state.ExpertiseData.hasOwnProperty('image_description_id')? this.state.ExpertiseData['image_description_id'][0].map((obj, i) => {
                                if ((i + 1) % 2 === 0) {
                                    return <LeftImgRContent data={obj}/>
                                }
                                else {
                                    return <RightImgLContent data={obj}/>
                                }
                            }): ''
                    }
                    <div className="top-100 bottom-100 clearfix"></div>
                {this.state.ExpertiseData.hasOwnProperty('sub_block_id')? <FooterHeading subBlockData = {this.state.ExpertiseData['sub_block_id'][0]}/>:''}
                <div className="top-100 bottom-100 clearfix"></div>
                    <GridList/>
                    <div className="top-100 bottom-100 clearfix"></div>
                    {this.state.ExpertiseData.hasOwnProperty('award_slider_id')?this.state.ExpertiseData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}
                    {this.state.ExpertiseData.hasOwnProperty('certificate_slider_id')? this.state.ExpertiseData['certificate_slider_id'][0][0].certificate_slider_id ? <CertSlider/>: '':''}
                    {this.state.ExpertiseData.hasOwnProperty('partner_slider_id')? this.state.ExpertiseData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':''}
                    {this.state.ExpertiseData.hasOwnProperty('client_slider_id')? this.state.ExpertiseData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}
                </div>

        )
    }
}
export default Expertise;
