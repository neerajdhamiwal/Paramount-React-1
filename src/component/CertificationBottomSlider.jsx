
import React from 'react';
import {apiUrl, decodeUri} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import requestService from '../services/request.js';



class FooterRowSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2,3,4,5],
            clientData:[]
        }
        this.slider = this.slider.bind(this)
    }
    componentWillMount(){
        requestService.getService('/block-slider-data/6')
            .then((response) => {
                this.setState({clientData: response.data},()=> {
                    this.slider();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    slider(){
        $('.cert-items').slick({
            dots: true,
            slidesPerRow: 5,
            rows: 2,
            arrows : false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesPerRow: 4,
                        rows: 2,
                        arrows : false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesPerRow: 2,
                        rows: 2,
                        arrows : false,
                    }
                }
            ]
        });

    }
    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render(){
        return(
            this.state.clientData.length>0? <div className="grid-container row-slider pb-50">
                <h2 className="title-span text-center"><span>{ReactHtmlParser(this.state.clientData[0].logo_image_title)}</span></h2>
                <div className="carousel cert-items">
                        {
                            this.state.clientData.map((image)=> {
                                return <div className="logo-icon"><img src={decodeUri(apiUrl+image.logo_image_image)} width="200" height="200" alt="destination"/></div>
                            })
                        }
                    </div>
            </div>:''
        )
    }
}
export default FooterRowSlider;
