
import React from 'react';
import {apiUrl, decodeUri} from '../services/common.js';
class FooterRowSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2,3,4,5],
            clientData:[]
        }
    }
    componentDidMount(){
        $('.multiple-items').slick({
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

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render(){
        return(
            <div className="grid-container row-slider pb-50">
                <h2 className="title-span text-center"><span>Our</span> clients</h2>
                {this.props.clientData.length>0? <div className="carousel multiple-items">
                        {
                            this.props.clientData.map((image)=> {
                                return <div className="logo-icon"><img src={apiUrl+decodeUri(image.logo_image_image)} width="200" height="200" alt="destination"/></div>
                            })
                        }
                    </div>: ''}
            </div>
    )
    }
}
export default FooterRowSlider;
