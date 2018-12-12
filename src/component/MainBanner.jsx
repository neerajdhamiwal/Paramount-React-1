
import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';

import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';


//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.animation = this.animation.bind(this);
    }

    animation(){
        let scenethree = document.getElementById('scenethree');
        let parallaxInstance = new Parallax(scenethree);
    }
    componentDidMount(){
      this.animation();
    }
    render(){
        return(
            <section className="main-banner award-banner">
                <div className="grid-container">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-4 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.node[0].node_title)}</span><br/>{ReactHtmlParser(this.props.node[0].node_subtitle_title)}</h3>
                            {/*<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>*/}
                            <p>{ReactHtmlParser(this.props.node[0].node_description)}</p>
                            {this.props.node[0].hasOwnProperty('node_cta_button_title')? this.props.node[0].node_cta_button_title !==''?<button className="button">{this.props.node[0].node_cta_button_title}</button>:'':''}
                        </div>
                        <div className="medium-6 cell about-us-banner">
                            <div class="rotation-banner">
                               <img id="loading" src={aboutLayerBannerone} alt="" />
                               <img class="over-img" src={aboutLayerBannertwo} alt="" />
                             </div>
                        </div>

                        <div className="medium-6 cell expertise-banner">
                            <div id="scenethree" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                              <div data-depth="0.3"><img src={award1} alt="" /></div>
                              <div data-depth="0.8"><img src={award2} alt="" /></div>
                              <div data-depth="0.8"><img src={award3} alt="" /></div>
                              <div data-depth="0.6"><img src={award4} alt="" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        )
    }
}
export default Home;
