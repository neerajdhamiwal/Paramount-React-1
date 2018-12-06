
import React from 'react';
import logo1 from '../assets/img/logo/logo1.jpg';
import logo2 from '../assets/img/logo/logo2.jpg';
import logo3 from '../assets/img/logo/logo3.jpg';
import logo4 from '../assets/img/logo/logo4.jpg';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
class FooterRowSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2,3,4,5],
            clientData:[]
        }
    }
    componentWillMount(){
        requestService.getService('/image-logo-component-data/11')
            .then((response) => {
                this.setState({clientData: response.data})
            })
            .catch((err) => {
                console.log(err);
            })
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
    render(){
        return(
            <div className="grid-container row-slider pb-50">
                <h2 className="title-span text-center"><span>Our</span> clients</h2>
                <div className="carousel multiple-items">
                    {
                        this.state.clientData.map((image)=> {
                            return <div className="logo-icon"><img src={apiUrl+image.logo_image_url} width="200" height="200" alt="destination"/></div>

                    })
                    }



                </div>
            </div>
    )
    }
}
export default FooterRowSlider;
