
import React from 'react';
import WOW from 'wowjs';
import Parallax from 'parallax-js';
import Headercomp from '../component/Header.jsx';
import GridOverLap from '../component/GridOverlap.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import Footer from '../component/Footer.jsx';
import smallImg from '../assets/img/small-img.png';
import bannerPlaceImg from '../assets/img/banner-placeholder.png';
import layer1 from '../assets/img/layers/layer1.png';
import layer2 from '../assets/img/layers/layer2.png';
import layer3 from '../assets/img/layers/layer3.png';
import layer4 from '../assets/img/layers/layer4.png';
import layer5 from '../assets/img/layers/layer5.png';
import layer6 from '../assets/img/layers/layer6.png';
import layer7 from '../assets/img/layers/layer7.png';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
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
                <AccordionTab/>
                <div className="top-100 bottom-100 clearfix"></div>
                <LeftImgRContent/>
                <div className="top-100 bottom-100 clearfix"></div>
                <RightImgLContent/>
                <div className="clear"></div>
            </div>
        )
    }
}
export default Home;
