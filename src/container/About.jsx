
import React from 'react';
import Header from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import FooterHeading from '../component/FooterHeading.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import MainBanner from '../component/MainBanner.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            aboutData: {}
        }
    }
    componentWillMount(){
        requestService.getService('/landing-page-data/35')
            .then((response) => {
                let ids = ['slider_id','logo_id','sub_block_id','image_description_id','hd_id'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({aboutData: data});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render(){
        return(
            <div>
                {this.state.aboutData.hasOwnProperty('slider_id')?<MainBanner node={this.state.aboutData['slider_id'][0]}/>:''}
                {this.state.aboutData.hasOwnProperty('slider_id')? <AccordionTab sliderData = {this.state.aboutData['slider_id'][0]}/> :''}
                {this.state.aboutData.hasOwnProperty('image_description_id')? <section className="tab-accordion top-100 bottom-100">
                        <div className="grid-container  custom-grid custom-grid-right">
                            <div className="grid-x">
                                <div className="medium-12 cell">
                                    <div className="tabs-content" data-tabs-content="service-tabs">
                                        <div className="tabs-panel is-active">
                                            {  this.state.aboutData['image_description_id'][0].map((data) => {
                                                    return <div className="grid-x grid-padding-x ">
                                                        <div className="medium-6 cell">
                                                            <div className="pr-155 pt-50">
                                                                <h3 className="mb-50">{data.image_description_title}</h3>
                                                                <p>{$(data.image_description_body).text()}</p>
                                                            </div>
                                                        </div>
                                                        <div className="medium-6 cell no-padding">
                                                            <div className="img-relative-title-ld">
                                                                {/*<h2 className="relative-title">{data.image_description_title}</h2>*/}
                                                                <img src={apiUrl+data.image_description_image} alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                :''}
                {this.state.aboutData.hasOwnProperty('sub_block_id')?<FooterHeading subBlockData = {this.state.aboutData['sub_block_id'][0]}/>:''}
                {this.state.aboutData.hasOwnProperty('logo_id')?<FooterRowSlider clientData = {this.state.aboutData['logo_id'][0]}/>:''}
            </div>
        )
    }
}
export default About;

