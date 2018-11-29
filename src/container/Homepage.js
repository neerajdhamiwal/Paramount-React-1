
import React from 'react';
import Headercomp from '../component/Header.jsx';
import GridOverLap from '../component/GridOverlap.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import Footer from '../component/Footer.jsx';
import smallImg from '../assets/img/small-img.png';
import bannerPlaceImg from '../assets/img/banner-placeholder.png';
import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div>
                <section className="main-banner">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>Solutions that are...</span><br/>
                                    Simple.<br/>
                                    Collaborative.<br/>
                                    Agile.</h3>
                                <button className="button">Know more</button>
                                <div className="banner-img-link">
                                    <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">
                                        <div className="cell shrink"><a href="#"><img src={smallImg} alt=""/></a></div>
                                        <div className="cell shrink"><a href="#"><img src={smallImg} alt=""/></a></div>
                                        <div className="cell shrink"><a href="#"><img src={smallImg} alt=""/></a></div>
                                    </div>
                                </div>

                            </div>
                            <div className="medium-6 cell">
                                <img src={bannerPlaceImg} alt=""/>
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
