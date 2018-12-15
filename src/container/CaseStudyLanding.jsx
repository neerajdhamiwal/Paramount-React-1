
import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import MainBanner from '../component/MainBanner.jsx'
import AwardSlider from '../component/AwardsBottomSlider.jsx'
import CertSlider from '../component/CertificationBottomSlider.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import WOW from 'wowjs';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
let nid = '';
//import 'foundation/js/vendor/zepto';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listingData: {},
            bannerData: [],
            loading: true
        }
        this.animation = this.animation.bind(this);
    }

    animation(){
        new WOW.WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        ).init();

        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);
    }

    componentWillMount(){
        requestService.getService('/banner-block-casestudy')
            .then((response) => {
                this.setState({loading: false});
                this.setState({bannerData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService('/listing-casestudy')
            .then((response) => {
                let ids = ['nid'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({listingData: data},()=> {
                        // this.animation()
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
        return(
            this.state.loading? <center >
                    <Loader
                        type="ThreeDots"
                        color="#fd302a"
                        height="100"
                        width="100"
                    />
                </center> :
                <div>
                    { this.state.bannerData.length>0?
                        <div>
                            <section className="bottom-100">
                                    <div className="grid-container custom-grid custom-grid-right">
                                        <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                                            <div className="medium-5 cell small-order-change">
                                                <h3 className="banner-info"><span>{ReactHtmlParser(this.state.bannerData[0].banner_title)}</span><br/>
                                                    {ReactHtmlParser(this.state.bannerData[0].banner_subtitle)}</h3>
                                                <h5>{ReactHtmlParser(this.state.bannerData[0].banner_description)}</h5>
                                                <p>{ReactHtmlParser(this.state.bannerData[0].banner_body)}</p>
                                            </div>
                                            <div className="medium-6 cell">
                                                <div class="rotation-banner">
                                                    <img id="loading" src={aboutLayerBannerone} alt="" />
                                                    <img class="over-img" src={aboutLayerBannertwo} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            {this.state.listingData.hasOwnProperty('nid')?this.state.listingData['nid'][0].map((obj) => {
                                return <section className="award-content-box top-100 bottom-100">
                                    <div className="grid-container">
                                        <div className="grid-x align-right align-middle grid-margin-x">
                                            <div className="medium-2 cell small-order-change">
                                                <img src={apiUrl+obj.hero_image}/>
                                            </div>
                                            <div className="medium-8 cell">
                                                <div className="award-content pr-155">
                                                    <h3>{ReactHtmlParser(obj.node_title)}</h3>
                                                    <h6>{ReactHtmlParser(obj.node_subtitle_title)}</h6>
                                                    <p>{ReactHtmlParser(obj.node_body)}</p>
                                                    <a className="button" href={obj.cta_button_url}>{obj.cta_button_title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            })
                            :''}
                        </div> :''}

                    {/*{this.state.awardsData.hasOwnProperty('secondary_image_id')?*/}
                        {/*this.state.awardsData['secondary_image_id'][0].map((obj) => {*/}
                            {/*return <section className="award-content-box top-100 bottom-100">*/}
                                {/*<div className="grid-container">*/}
                                    {/*<div className="grid-x align-right align-middle grid-margin-x">*/}
                                        {/*<div className="medium-2 cell small-order-change">*/}
                                            {/*<img src={apiUrl+obj.secondary_image_img}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="medium-8 cell">*/}
                                            {/*<div className="award-content pr-155">*/}
                                                {/*<a href="#">{ReactHtmlParser(obj.secondary_image_title)}</a>*/}
                                                {/*<h3>{ReactHtmlParser(obj.secondary_image_description)}</h3>*/}
                                                {/*<p>{ReactHtmlParser(obj.secondary_image_body)}</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}
                        {/*})*/}
                        {/*:''}*/}
                    {/*{this.state.awardsData.hasOwnProperty('award_slider_id')?this.state.awardsData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}*/}
                    {/*{this.state.awardsData.hasOwnProperty('certificate_slider_id')? this.state.awardsData['certificate_slider_id'][0][0].certificate_slider_id ? <CertSlider/>: '':''}*/}
                </div>
        )
    }
}
export default About;
