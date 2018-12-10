
import React from 'react';
import WOW from 'wowjs';
import Parallax from 'parallax-js';
import GridOverLap from '../component/GridOverlap.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import layer1 from '../assets/img/layers/layer1.png';
import layer2 from '../assets/img/layers/layer2.png';
import layer3 from '../assets/img/layers/layer3.png';
import layer4 from '../assets/img/layers/layer4.png';
import layer5 from '../assets/img/layers/layer5.png';
import layer6 from '../assets/img/layers/layer6.png';
import layer7 from '../assets/img/layers/layer7.png';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import smallImg from '../assets/img/small-img.png';
import {jsonMiddleware} from '../services/common';
import requestService from '../services/request.js';
import $ from 'jquery';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars


//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            ExpertiseData: {},
            loading: true

        }
    }
    componentWillMount(){
        requestService.getService('/services-node-data/24')
            .then((response) => {
                let ids = ['img_des_id','sub_block_id'];
                this.setState({ExpertiseData: jsonMiddleware(response.data, ids)});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();

        new WOW.WOW(
          {
            animateClass: 'animated',
            offset:       100,
          }
        ).init();

        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);

    }
    render(){
        return(
            <div>
                <section className="main-banner">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>Solutions that are...</span><br/>
                                    Simple.<br/>
                                    Collaborative.<br/>
                                    Agile.</h3>
                                <button className="button">Know more</button>
                                <div className="banner-img-link">
                                    <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
                                        <div className="cell shrink wow fadeInDown" data-wow-delay="0.5s"><a href="#"><img src={smallImg} alt=""/></a></div>
                                        <div className="cell shrink wow fadeInDown" data-wow-delay="1s"><a href="#"><img src={smallImg} alt=""/></a></div>
                                        <div className="cell shrink wow fadeInDown" data-wow-delay="1.5s"><a href="#"><img src={smallImg} alt=""/></a></div>
                                    </div>
                                </div>

                            </div>
                            <div className="medium-6 cell">
                              <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                                <div data-depth="0.3"><img src={layer7} alt="" /></div>
                                <div data-depth="0.8"><img src={layer6} alt="" /></div>
                                <div data-depth="0.8"><img src={layer5} alt="" /></div>
                                <div data-depth="0.6"><img src={layer4} alt="" /></div>
                                <div data-depth="0.2"><img src={layer3} alt="" /></div>
                                <div data-depth="0.4"><img src={layer2} alt="" /></div>
                                <div data-depth="0.2"><img src={layer1} alt="" /></div>
                              </div>
                            </div>

                        </div>

                    </div>
                </section>
                <div className="top-100 bottom-100 clearfix"></div>
                <GridOverLap/>
                <div className="top-100 bottom-100 clearfix"></div>
                {this.state.ExpertiseData.hasOwnProperty('slider_id')? <AccordionTab sliderData = {this.state.ExpertiseData['slider_id'][0]}/>:''}
                <div className="top-100 bottom-100 clearfix"></div>
                {
                    this.state.ExpertiseData.hasOwnProperty('img_des_id') ? this.state.ExpertiseData['img_des_id'][0].map((obj, i) => {
                        if ((i + 1) % 2 === 0) {
                            return <LeftImgRContent data={obj}/>

                        }
                        else {
                            return <RightImgLContent data={obj}/>

                        }
                    }):''
                }
                <div className="clear"></div>
            </div>
        )
    }
}
export default Home;
