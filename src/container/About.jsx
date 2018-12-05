
import React from 'react';
import Header from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import Footer from '../component/Footer.jsx';
import mobileHeader from '../component/mobileHeader.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import layerTop from '../assets/img/layertop.png';
import placeholder from '../assets/img/placeholder.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            aboutData: [],
            foundationData: [],
            headingData: [],
            heading: []
        }
    }
    componentWillMount(){
        requestService.getService('/image-slider/13')
            .then((response) => {
                this.setState({aboutData: response.data})
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService('/image-component-data/11')
            .then((response) => {
                this.setState({foundationData: response.data})
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService('/standard-heading-component-data/11')
            .then((response) => {
            this.setState({heading: response.data})
            let headingData = [];
                let subarr = [];
                response.data.forEach((data, index) => {
                if(index!==0 && index%2 === 0){
                    headingData.push(subarr)
                    subarr = [];
                }
                else{
                    subarr.push(data);
                }

            })
                this.setState({headingData});
            })
            .catch((err) => {
                console.log(err);
            })
    }

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

                                <h6>{this.state.aboutData.length>0 ? $(this.state.aboutData[0]['node_body']).text() : ''}</h6>
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
                                    <div className="tabs-panel is-active">
                                        {  this.state.foundationData.map((data) => {
                                            if (data.image_title) {
                                                return <div className="grid-x grid-padding-x ">
                                                    <div className="medium-6 cell">
                                                        <div className="pr-155 pt-50">
                                                            <h3 className="mb-50">{data.image_title}</h3>
                                                            <p>{$(data.image_description).text()}</p>
                                                        </div>
                                                    </div>
                                                    <div className="medium-6 cell no-padding">
                                                        <div className="img-relative-title-ld">
                                                            <h2 className="relative-title">Our Foundation</h2>
                                                            <img src={apiUrl+data.image_url} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        })
                                        }
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
                                {this.state.heading.map((mainHeading) => {
                                    if(mainHeading.main_heading !==''){
                                        return <h3>{mainHeading.main_heading}</h3>
                                    }
                                })}
                            </div>
                            {this.state.heading.length>0?
                                this.state.headingData.map((subArr, index) => {
                                        return  <div className="medium-12 cell">
                                    <div className="grid-x">
                                        {
                                            subArr.map((heading, i) => {
                                            return <div className="medium-5 cell">
                                                <div className="four-column-content four-col-left">
                                                    <a href="#">{heading.sub_heading}</a>
                                                    <p>{$(heading.heading_description).text()}</p>
                                                </div>
                                            </div>
                                        })
                                        }
                                    </div>
                                </div>
                            }
                            ):''}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;

