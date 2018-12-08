
import React from 'react';
import Header from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import Footer from '../component/Footer.jsx';
import mobileHeader from '../component/mobileHeader.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import img4 from '../assets/img/img4.png';
import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Resource extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div>
                <div className="grid-container pl-155 pr-155 pt-50">
                    <div className="grid-x align-center block-latest-reads">
                        <div className="medium-4 cell img-block">
                            <div className="img">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor </a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>

                    </div>

                    <div className="grid-x align-center block-latest-reads">
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor </a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>

                    </div>

                    <div className="grid-x align-center block-latest-reads">
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor </a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>
                        <div className="medium-4 cell img-block">
                            <div className="img ">
                                <img src={img4}/>
                            </div>
                            <div className="img-content">
                                <h6>Blogs</h6>
                                <h2><a href="#">Lorem ipsum dolor</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="main-banner top-100 banner-with-content">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>Featured Case Study</span><br/>
                                    Company Name</h3>
                            </div>
                            <div className="medium-6 cell">
                                <div className="banner-with-content-right">
                                    <h3><strong>Getty</strong>images"</h3>
                                    <p>ferrantraite</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-banner bottom-100 top-100 banner-with-content-box">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-5 cell small-order-change">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <button className="button">Read more</button>
                            </div>
                            <div className="medium-5 cell"></div>
                        </div>
                    </div>
                </section>
                {/*<AccordionTab/>*/}
            </div>
        )
    }
}
export default Resource;

