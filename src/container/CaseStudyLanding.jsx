
import React from 'react';
import Parallax from 'parallax-js';
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import WOW from 'wowjs';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
import ShowMore from '../component/ShowMore.jsx';
import DocumentMeta from 'react-document-meta';

let nid = '';
//import 'foundation/js/vendor/zepto';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listingData: {},
            bannerData: [],
            loading: true,
            meta: {
                title: 'Case Studies | Paramount Software Solutions',
                description: 'Read the cases we have addressed using our sheer technical acumen, delivered applications and solutions across various industries and sectors.',
                canonical: 'http://paramountreact.opensenselabs.com/caseStudy',
                meta: {
                    name: {
                        keywords: ''
                    }
                }
            }
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
                this.setState({bannerData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService('/listing-casestudy')
            .then((response) => {
                let ids = ['nid'];
                let data = jsonMiddleware(response.data, ids)
                // this.setState({});
                this.setState({loading: false, listingData: data,},()=> {
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
                <DocumentMeta {...this.state.meta}>
                { this.state.bannerData.length>0?
                        <div>
                            <section className="bottom-100">
                                    <div className="grid-container custom-grid custom-grid-right">
                                        <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                                            <div className="medium-5 cell small-order-change">
                                                <h3 className="banner-info">{ReactHtmlParser(this.state.bannerData[0].banner_title)}<br/>
                                                    <span>{ReactHtmlParser(this.state.bannerData[0].banner_subtitle)}</span></h3>
                                                <h5>{ReactHtmlParser(this.state.bannerData[0].banner_description)}</h5>
                                                    <ShowMore id="caseBnnr" longText= {this.state.bannerData[0].banner_body}>
                                                    </ShowMore>
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

                            {this.state.listingData.hasOwnProperty('nid')?this.state.listingData['nid'][0].map((obj, i) => {
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
                                                    <p>{ReactHtmlParser(imgPath(obj.node_body))}</p>
                                                    <a className="button" href={obj.cta_button_url.substring(9)}>{obj.cta_button_title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            })
                            :''}
                        </div> :''}
                </DocumentMeta>
        )
    }
}
export default About;
