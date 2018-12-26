
import React from 'react';
import {apiUrl, decodeUri, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from 'react-show-more';

class LeftImgRContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
            <section className="left-image-right-content ">
                {this.props.secondary? <div className="grid-container custom-grid custom-grid-left">
                        <div className="grid-x align-middle">
                            <div className="large-7 cell no-padding wow slideInLeft">
                                <div className="img-relative-title-ru">
                                    <h2 className="relative-title">{ReactHtmlParser(this.props.data.secondary_image_description_title)}</h2>
                                    <img src={decodeUri(apiUrl+this.props.data.secondary_image_description_img)} alt=""/>
                                </div>
                            </div>
                            <div className="large-5 cell wow fadeInUp">
                                <div className="content-inner pl-155">
                                    <h3>{ReactHtmlParser(this.props.data.secondary_image_description_subheading)}</h3>
                                    <ShowMore lines={COUNT}
                                              more='View more'
                                              less='View less'
                                              anchorClass=''>
                                        <p>{ReactHtmlParser(imgPath(this.props.data.secondary_image_description_body))}</p>
                                    </ShowMore>
                                </div>
                            </div>
                        </div>
                    </div>: <div className="grid-container custom-grid custom-grid-left">
                        <div className="grid-x align-middle">
                            <div className="large-7 cell no-padding wow slideInLeft">
                                <div className="img-relative-title-ru">
                                    <h2 className="relative-title">{ReactHtmlParser(this.props.data.image_description_title)}</h2>
                                    <img src={decodeUri(apiUrl+this.props.data.image_description_img)} alt=""/>
                                </div>
                            </div>
                            <div className="large-5 cell wow fadeInUp">
                                <div className="content-inner pl-155">
                                    <h3>{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                                    <ShowMore lines={COUNT}
                                              more='View more'
                                              less='View less'
                                              anchorClass=''>
                                        <p>{ReactHtmlParser(imgPath(this.props.data.image_description_body))}</p>
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
