
import React from 'react';
import logo1 from '../assets/img/logo/logo1.jpg';
import logo2 from '../assets/img/logo/logo2.jpg';
import logo3 from '../assets/img/logo/logo3.jpg';
import logo4 from '../assets/img/logo/logo4.jpg';
class FooterRowSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2,3,4,5]
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
    render(){
        return(
            <div className="grid-container row-slider pb-50">
                <h2 className="title-span text-center"><span>Our</span> clients</h2>
                <div className="carousel multiple-items">
                    {/*{*/}
                        {/*this.state.logo.map(()=> {*/}
                            {/*return <div>*/}
                            <div className="logo-icon"><img src={logo1} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo2} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo3} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo4} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo1} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo2} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo3} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo4} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo1} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo2} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo3} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo4} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo1} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo2} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo3} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo4} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo1} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo2} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo3} width="200" height="200" alt="destination"/></div>
                            <div className="logo-icon"><img src={logo4} width="200" height="200" alt="destination"/></div>
                            {/*</div>*/}
                        {/*})*/}
                    {/*}*/}

                </div>
            </div>
    )
    }
}
export default FooterRowSlider;

