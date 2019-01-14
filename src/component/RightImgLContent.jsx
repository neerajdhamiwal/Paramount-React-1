
import React from 'react';
import WOW from 'wowjs';
import {apiUrl, decodeUri, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';

class RightImgLContent extends React.Component{
    componentDidMount(){
        new WOW.WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        ).init();
    }
    render(){
        return(
             // left-image-right-content Section Starts Here
        <section className="left-image-right-content">
            {this.props.secondary? <div className="grid-container custom-grid custom-grid-right">
                <div className="grid-x grid-padding-x height-750 align-middle">
                    <div className="medium-6 cell  p-right-45">
                        {/*<h2 className="relative-title">Our Services</h2>*/}
                        <h3 className="heading-content">{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                        <ShowMore id={`rightImgLcon${this.props.data.secondary_img_des_id}`} longText= {this.props.data.secondary_image_description_body}>
                        </ShowMore>
                    </div>
                    <div className="medium-6 cell no-padding wow slideInRight">
                        <div className="img-relative-title-ld">
                            <div className="grid">
                                <div className="grid__item">
                                    <div className="box">
                                        <div className="box__shadow"></div>
                                        <img className="box__img" src={apiUrl+this.props.data.secondary_image_description_img} alt="Some image"/>
                                        <h2>{ReactHtmlParser(this.props.data.secondary_image_description_title)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: <div className="grid-container custom-grid custom-grid-right">
                    <div className="grid-x grid-padding-x height-750 align-middle">
                        <div className="medium-6 cell  p-right-45">
                            {/*<h2 className="relative-title">Our Services</h2>*/}
                            <h3>{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                                <ShowMore id={`rightImgLcon${this.props.data.img_des_id}`} longText= {this.props.data.image_description_body}>
                                </ShowMore>
                        </div>
                        <div className="medium-6 cell no-padding wow slideInRight">
                            <div className="img-relative-title-ld">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="box">
                                            <div className="box__shadow"></div>
                                            <img className="box__img" src={apiUrl+this.props.data.image_description_img} alt="Some image"/>
                                            <h2>{ReactHtmlParser(this.props.data.image_description_title)}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </section>
         // left-image-right-content Section Ends Here
        )
    }
}
export default RightImgLContent;
