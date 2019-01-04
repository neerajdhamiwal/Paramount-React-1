
import React from 'react';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
import layer1 from '../assets/img/exp-banner.png';
import layer2 from '../assets/img/exp-banner2.png';
import layer3 from '../assets/img/exp-banner3.png';
import ImgBannerTwo from '../assets/img/services-sub-two.png';
import {apiUrl, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from  './ShowMore.jsx';
import Parallax from 'parallax-js';


//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.animation = this.animation.bind(this);
    }
    animation(){
       new Parallax(document.getElementById('scene'));
    }
    componentDidMount(){
      if(this.props.nid==38){
        this.animation();
      }
    }
    render(){
        return(
            <section className="main-banner award-banner">
                <div className="grid-container">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                            <h3 className="banner-info">{ReactHtmlParser(this.props.node[0].node_title)}<br/><span>{ReactHtmlParser(this.props.node[0].node_subtitle_title)}</span></h3>
                                <ShowMore id='bannr' longText= {this.props.node[0].node_description} hiddenHeight={406}>
                                 </ShowMore>
                            {this.props.node[0].hasOwnProperty('node_cta_button_title')? this.props.node[0].node_cta_button_title !==''?<a className="button" href={apiUrl+this.props.node[0].node_cta_button_url.substring(9)}>{this.props.node[0].node_cta_button_title}</a>:'':''}
                            {this.props.node[0].hasOwnProperty('node_cta_button_title')?this.props.node[0].download_link_title !==''?<a className="button" href={apiUrl+this.props.node[0].download_link_url.substring(9)}>{this.props.node[0].download_link_title}</a>:'':''}
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
                        <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                          <div data-depth="0.2"><img src={layer1} alt="" /></div>
                          <div data-depth="0.4"><img src={layer2} alt="" /></div>
                          <div data-depth="0.2"><img src={layer3} alt="" /></div>
                        </div>
                        </div>:''}

                    </div>
                </div>
            </section>
        )
    }
}
export default Home;
