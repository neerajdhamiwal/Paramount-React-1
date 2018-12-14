
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
                                <iframe width="600" height="450" frameborder="0" style={{border:0}}
                                        src="https://www.google.com/maps/embed/v1/place?q=4030%20Old%20Milton%20Pkwy%2C%20Alpharetta%2C%20GA%2030005%2C%20USA&key=..." allowfullscreen></iframe>                            </div>
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

