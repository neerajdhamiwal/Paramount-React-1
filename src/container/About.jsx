
import React from 'react';
import Header from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import Footer from '../component/Footer.jsx';
import mobileHeader from '../component/mobileHeader.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import layerTop from '../assets/img/layertop.png';
import placeholder from '../assets/img/placeholder.png';
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
                <section className="main-banner top-100 bottom-100 award-banner">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>About</span><br/>
                                    Us</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>
                                <button className="button">Download Brochure</button>
                            </div>
                            <div className="medium-6 cell">
                                <img src={layerTop} alt=""/>
                            </div>

                        </div>

                    </div>
                </section>
                <AccordionTab/>
                <section className="tab-accordion top-100 bottom-100">
                    <div className="grid-container  custom-grid custom-grid-right">
                        <div className="grid-x">
                            <div className="medium-12 cell">
                                <div className="tabs-content" data-tabs-content="service-tabs">
                                    <div className="tabs-panel is-active" id="panel1">
                                        <div className="grid-x grid-padding-x ">
                                            <div className="medium-6 cell">
                                                <div className="pr-155 pt-50">
                                                    <h3 className="mb-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                            <div className="medium-6 cell no-padding">
                                                <div className="img-relative-title-ld">
                                                    <h2 className="relative-title">Our Foundation</h2>
                                                    <img src={placeholder} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabs-panel" id="panel2">
                                        <p>two</p>
                                        <img className="thumbnail" src=""/>
                                    </div>
                                    <div className="tabs-panel" id="panel3">
                                        <p>three</p>
                                        <p>Check me out! I'm a super cool Tab panel with text content!</p>
                                    </div>
                                    <div className="tabs-panel" id="panel4">
                                        <p>four</p>
                                        <img className="thumbnail" src=""/>
                                    </div>
                                    <div className="tabs-panel" id="panel5">
                                        <p>five</p>
                                        <p>Check me out! I'm a super cool Tab panel with text content!</p>
                                    </div>
                                    <div className="tabs-panel" id="panel6">
                                        <p>six</p>
                                        <img className="thumbnail" src=""/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="four-column-outer pt-50 pb-50 top-100 bottom-100">
                    <div className="grid-container">
                        <div className="grid-x">
                            <div className="heading-four-column">
                                <h3><span>Heading</span> big one</h3>
                            </div>
                            <div className="medium-12 cell">
                                <div className="grid-x">
                                    <div className="medium-5 cell">
                                        <div className="four-column-content four-col-left">
                                            <a href="#">Sub Heading one</a>
                                            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
                                        </div>
                                    </div>
                                    <div className="medium-5 cell">
                                        <div className="four-column-content four-col-left four-col-right">
                                            <a href="#">Sub Heading one</a>
                                            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="medium-12 cell pt-50">
                                <div className="grid-x">
                                    <div className="medium-5 cell">
                                        <div className="four-column-content four-col-left">
                                            <a href="#">Sub Heading one</a>
                                            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
                                        </div>
                                    </div>
                                    <div className="medium-5 cell">
                                        <div className="four-column-content four-col-left four-col-right">
                                            <a href="#">Sub Heading one</a>
                                            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;

