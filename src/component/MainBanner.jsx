
import React from 'react';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <section className="main-banner award-banner">
                <div className="grid-container">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-4 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.node[0].node_title)}</span><br/>{ReactHtmlParser(this.props.node[0].node_subtitle_title)}</h3>
                            <p>{ReactHtmlParser(this.props.node[0].node_description)}</p>
                            {this.props.node[0].hasOwnProperty('node_cta_button_title')? this.props.node[0].node_cta_button_title !==''?<button className="button">{this.props.node[0].node_cta_button_title}</button>:'':''}
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


        )
    }
}
export default Home;
