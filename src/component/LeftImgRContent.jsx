
import React from 'react';
import Placeholder2 from '../assets/img/placeholder2.png';
import {apiUrl} from '../services/common.js';
class LeftImgRContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
            <section className="left-image-right-content top-100 bottom-100">
                <div className="grid-container custom-grid custom-grid-left">
                    <div className="grid-x align-middle">
                        <div className="large-7 cell no-padding wow slideInLeft">
                            <div className="img-relative-title-ru">
                                {/*<h2 className="relative-title">Our Services</h2>*/}
                                <img src={apiUrl+this.props.data.image_description_image} alt=""/>
                            </div>
                        </div>
                        <div className="large-5 cell wow fadeInUp">
                            <div className="content-inner pl-155">
                                <h3>{this.props.data.image_description_title}</h3>
                                <p>{this.props.data.image_description_body}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
         // left-image-right-content Section Ends Here
        )
    }
}
export default LeftImgRContent;
