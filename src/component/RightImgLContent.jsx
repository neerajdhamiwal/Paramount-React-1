
import React from 'react';
import Layertop from '../assets/img/layertop.png';
import {apiUrl} from '../services/common.js';
class RightImgLContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
        <section class="left-image-right-content top-100 bottom-100">
            <div class="grid-container custom-grid custom-grid-right">
                <div class="grid-x grid-padding-x height-750 align-middle">
                    <div class="medium-4 cell">
                        {/*<h2 class="relative-title">Our Services</h2>*/}
                        <h3>{this.props.data.image_description_subheading}</h3>
                        <p>{$(this.props.data.image_description_body).text()}</p>
                    </div>
                    <div class="medium-7 cell no-padding">
                        <div class="img-relative-title-ld">
                            <div class="grid">
                                <a class="grid__item" href="#">
                                    <div class="box">
                                        <div class="box__shadow"></div>
                                        <h2>{this.props.data.image_description_title}</h2>
                                        <img class="box__img" src={apiUrl+this.props.data.image_description_img} alt="Some image"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         // left-image-right-content Section Ends Here
        )
    }
}
export default RightImgLContent;

