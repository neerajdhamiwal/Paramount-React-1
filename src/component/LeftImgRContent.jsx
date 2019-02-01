
import React from 'react';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';
import WOW from 'wowjs';


class LeftImgRContent extends React.Component{
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
                {this.props.secondary? <div className="grid-container custom-grid custom-grid-left">
                        <div className="grid-x align-middle">
                            <div className="large-6 cell no-padding wow slideInLeft p-right-45">
                                <div className="img-relative-title-ru">
                                    <h2 className="relative-title">{ReactHtmlParser(this.props.data.secondary_image_description_title)}</h2>
                                    <img src={apiUrl+this.props.data.secondary_image_description_img} alt=""/>
                                </div>
                            </div>
                            <div className="large-6 cell wow fadeInUp">
                                <div className="content-inner pl-155">
                                    <h3>{ReactHtmlParser(this.props.data.secondary_image_description_subheading)}</h3>

                                    <ShowMore id={`leftImgRcnt${this.props.data.secondary_img_des_id}`} longText= {this.props.data.secondary_image_description_body} hiddenHeight={403}>

                                    </ShowMore>
                                </div>
                            </div>
                        </div>
                    </div>: <div className="grid-container custom-grid custom-grid-left">
                        <div className="grid-x align-middle">
                            <div className="large-6 cell no-padding wow slideInLeft p-right-45">
                                <div className="img-relative-title-ru">
                                    <h2 className="relative-title">{ReactHtmlParser(this.props.data.image_description_title)}</h2>
                                    <img src={apiUrl+this.props.data.image_description_img} alt=""/>
                                </div>
                            </div>
                            <div className="large-6 cell wow fadeInUp">
                                <div className="content-inner pl-155">
                                    <h3>{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                                        <ShowMore id={`leftImgRcnt${this.props.data.img_des_id}`} longText= {this.props.data.image_description_body} hiddenHeight={403}>
                                        </ShowMore>
                                </div>
                            </div>
                        </div>
                    </div>}

            </section>
         // left-image-right-content Section Ends Here
        )
    }
}
export default LeftImgRContent;
