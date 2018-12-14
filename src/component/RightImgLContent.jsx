
import React from 'react';
import Layertop from '../assets/img/layertop.png';
import {apiUrl, decodeUri} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';

class RightImgLContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
        <section class="left-image-right-content top-100 bottom-100">
            {this.props.secondary? <div class="grid-container custom-grid custom-grid-right">
                <div class="grid-x grid-padding-x height-750 align-middle">
                    <div class="medium-5 cell">
                        {/*<h2 class="relative-title">Our Services</h2>*/}
                        <h3 class="heading-content">{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                        <p>{ReactHtmlParser(this.props.data.image_description_body)}</p>
                    </div>
                    <div class="medium-7 cell no-padding">
                        <div class="img-relative-title-ld">
                            <div class="grid">
                                <a class="grid__item">
                                    <div class="box">
                                        <div class="box__shadow"></div>
                                        <h2>{ReactHtmlParser(this.props.data.secondary_image_description_title)}</h2>
                                        <img class="box__img" src={decodeUri(apiUrl+this.props.data.secondary_image_description_img)} alt="Some image"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: <div class="grid-container custom-grid custom-grid-right">
                    <div class="grid-x grid-padding-x height-750 align-middle">
                        <div class="medium-4 cell">
                            {/*<h2 class="relative-title">Our Services</h2>*/}
                            <h3>{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                            <p>{ReactHtmlParser(this.props.data.image_description_body)}</p>
                        </div>
                        <div class="medium-7 cell no-padding">
                            <div class="img-relative-title-ld">
                                <div class="grid">
                                    <a class="grid__item">
                                        <div class="box">
                                            <div class="box__shadow"></div>
                                            <h2>{ReactHtmlParser(this.props.data.image_description_title)}</h2>
                                            <img class="box__img" src={decodeUri(apiUrl+this.props.data.image_description_img)} alt="Some image"/>
                                        </div>
                                    </a>
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
