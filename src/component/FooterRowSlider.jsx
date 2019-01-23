
import React from 'react';
import {apiUrl} from '../services/common.js';
import requestService from '../services/request.js';
import $ from 'jquery';
class FooterRowSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2,3,4,5],
            clientData:[]
        }
        this.slider = this.slider.bind(this);
    }
    componentWillMount(){
        requestService.getService('/block-slider-data/6')
            .then((response) => {
                this.setState({clientData: response.data},()=> {
                    this.slider()
                });
            })
            .catch((err) => {
                //console.log(err);
            })
    }
    slider(){
        $('.multiple-items').slick({
            dots: true,
            slidesPerRow: 5,
            rows: 1,
            arrows : false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesPerRow: 5,
                        rows: 1,
                        arrows : false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesPerRow: 5,
                        rows: 2,
                        arrows : false,
                    }
                }
            ]
        });
    }

    render(){
        return(
            this.state.clientData.length>0? <div className="grid-container row-slider pb-50">
                    <h2 className="title-span text-center"><span><b>{this.state.clientData[0].logo_image_title}</b></span></h2>
                {this.state.clientData.length>0? <div className="carousel multiple-items">
                        {
                            this.state.clientData.map((image, i)=> {
                                return <div key = {i} className="logo-icon"><img src={apiUrl+image.logo_image_image} width="200" height="200" alt="destination"/></div>
                            })
                        }
                    </div>: ''}
            </div>:''
    )
    }
}
export default FooterRowSlider;
