import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import placeholderImg from '../assets/img/placeholder.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';
class AccordionaTab extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sliderData: []
        }
    }
    componentWillMount(){
        requestService.getService('/image-slider/13')
            .then((response) => {
                this.setState({sliderData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
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
                                {this.state.sliderData.map((service, index) => {
                                    if(service.slideimagetitle !==''){
                                        return <li className={index === 0 ? "tabs-title is-active" : "tabs-title"} onClick={(e)=> {this.active}}>{service.slideimagetitle}</li>
                                    }
                                })}

                            </ul>
                        </div>
                        <div className="medium-10 cell">
                            <div className="tabs-content" data-tabs-content="service-tabs">
                                {this.state.sliderData.map((service, index) => {
                                    if(service.slideimagedescription !=='') {
                                        return <div className={index === 0 ? "tabs-panel is-active" : "tabs-panel"}
                                                    id={'panel' + index}>
                                            <div className="grid-x grid-padding-x">
                                                <div className="medium-5 cell">
                                                    <p>{$(service.slideimagedescription).text()}</p>
                                                </div>
                                                <div className="medium-7 cell no-padding">
                                                    <ImgSlider imgArray = {service.sliderimage.split(',')} id={index}/>
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
