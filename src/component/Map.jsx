
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapCont extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="left-image-right-content top-200 bottom-100 contact-us-page">
                <div className="grid-container custom-grid custom-grid-left lp-row-none">
                    <div className="grid-x align-middle">
                        <div className="large-7 cell no-padding">
                            <div className="img-relative-title-ru">
                                <h2 className="relative-title">We are Here</h2>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.29227030525!2d-84.24459778478472!3d34.06202128060329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59fb340b3ce33%3A0x6d56288bb1ff7696!2s4030+Old+Milton+Pkwy%2C+Alpharetta%2C+GA+30005%2C+USA!5e0!3m2!1sen!2sin!4v1544792988864" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="large-5 cell">
                            <div className="content-inner pl-155">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                                <p className="ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAMnS9Hjyf2dmovrT8FUAXVUEBI-fBRye8')
})(MapCont)

