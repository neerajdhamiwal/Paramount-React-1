import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import placeholderImg from '../assets/img/placeholder.png';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';
class AccordionaTab extends React.Component{
    constructor(props){
        super(props)
    }
    active(e){
        console.log(e)
    }

    render(){
        return(
            <section className="tab-accordion">
                <div className="grid-container  custom-grid custom-grid-right">
                    <div className="grid-x">
                        <div className="medium-2 cell">
                            <ul className="accordion" data-responsive-accordion-tabs="accordion medium-tabs" id="service-tabs">
                                {this.props.sliderData.map((service, index) => {
                                    if(service.image_slider_title !==''){
                                        return <li className={index === 0 ? "tabs-title is-active" : "tabs-title"}><a href = {`#panel${index}`}>{service.image_slider_title}</a></li>
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="medium-10 cell">
                            <div className="tabs-content" data-tabs-content="service-tabs">
                                {this.props.sliderData.map((service, index) => {
                                    if(service.image_slider_description !=='') {
                                        return <div className={index === 0 ? "tabs-panel is-active" : "tabs-panel"}
                                                    id={'panel' + index}>
                                            <div className="grid-x grid-padding-x">
                                                <div className="medium-5 cell">
                                                    <p>{$(service.image_slider_description).text()}</p>
                                                </div>
                                                <div className="medium-7 cell no-padding">
                                                    <ImgSlider imgArray = {service.image_slider_image.split(',')} id={index}/>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AccordionaTab;
