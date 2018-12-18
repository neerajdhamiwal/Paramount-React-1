
import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import layerTop from '../assets/img/layertop.png';
import contactBanner from '../assets/img/contact-banner.png';
import contactBanner2 from '../assets/img/contact-banner2.png';
import contactBanner3 from '../assets/img/contact-banner3.png';
import careerBanner from '../assets/img/career-banner.png';
import careerBanner2 from '../assets/img/career-banner2.png';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
import ImgBannerTwo from '../assets/img/services-sub-two.png';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';
import expBanner from '../assets/img/expertise-banner.png';



//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.animation = this.animation.bind(this);
    }

    animation(){
    }

    componentDidMount(){
      let scene = document.getElementById('scene');
      console.log(scene);
      let parallaxInstance = new Parallax(scene);

      // let scenecareer = document.getElementById('scenecareer');
      // let parallaxInstance = new Parallax(scenecareer);
      this.animation();
    }
    componentWillReceiveProps(nextProp){
        console.log(nextProp);
    }
    render(){
        console.log(this.props.nid)
        return(
            <section className="main-banner award-banner">
                <div className="grid-container">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.node[0].node_title)}</span><br/>{ReactHtmlParser(this.props.node[0].node_subtitle_title)}</h3>
                            <p>{ReactHtmlParser(this.props.node[0].node_description)}</p>
                            {this.props.node[0].hasOwnProperty('node_cta_button_title')? this.props.node[0].node_cta_button_title !==''?<a className="button" href={apiUrl+this.props.node[0].node_cta_button_url.substring(9)}>{this.props.node[0].node_cta_button_title}</a>:'':''}
                            {this.props.node[0].hasOwnProperty('download_link_title')? this.props.node[0].download_link_title !==''?<a className="button" href={apiUrl+this.props.node[0].download_link_url.substring(9)}>{this.props.node[0].download_link_title}</a>:'':''}
                        </div>
                        {this.props.nid ==35?<div className="medium-6 cell about-us-banner">
                                <div class="rotation-banner">
                                    <img id="loading" src={aboutLayerBannerone} alt="" />
                                    <img class="over-img" src={aboutLayerBannertwo} alt="" />
                                </div>
                            </div>:''}
                        {this.props.nid== 49?<div className="medium-6 cell services-sub-menu-two">
                        <img src={ImgBannerTwo} alt="Banner"/>
                    </div>:''}
                        { this.props.nid ==46?<div className="medium-6 cell about-us-banner">
                        <div class="rotation-banner">
                            <img id="loading" src={aboutLayerBannerone} alt="" />
                            <img class="over-img" src={aboutLayerBannertwo} alt="" />
                        </div>
                    </div>:''}

                        {this.props.nid== 38?<div className="medium-6 cell expertise-banner">
                                <img src={ImgBannerTwo} alt="Banner"/>
                        </div>:''}
                        {this.props.nid==51 || this.props.nid == 'career'?<div className="medium-6 cell services-sub-menu-two">

                        <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                          {this.props.nid == 51 ?
                            <React.Fragment>
                              <div data-depth="0.3"><img src={contactBanner} alt="" /></div>
                              <div data-depth="0.8"><img src={contactBanner2} alt="" /></div>
                              <div data-depth="0.8"><img src={contactBanner3} alt="" /></div>
                            </React.Fragment>
                             :
                             <React.Fragment>
                               <div data-depth="0.3"><img src={careerBanner} alt="" /></div>
                               <div data-depth="0.8"><img src={careerBanner2} alt="" /></div>
                             </React.Fragment>
                            }
                        </div>

                            </div>:''}
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;
