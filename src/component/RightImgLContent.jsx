
import React from 'react';
import {apiUrl, decodeUri, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from 'react-show-more';

class RightImgLContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
        <section class="left-image-right-content">
            {this.props.secondary? <div class="grid-container custom-grid custom-grid-right">
                <div class="grid-x grid-padding-x height-750 align-middle">
                    <div class="medium-5 cell">
                        {/*<h2 class="relative-title">Our Services</h2>*/}
                        <h3 class="heading-content">{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                        <ShowMore lines={COUNT}
                                  more='View more'
                                  less='View less'
                                  anchorClass=''>
                            <p>{ReactHtmlParser(imgPath(this.props.data.image_description_body))}</p>
                        </ShowMore>
                    </div>
                    <div class="medium-7 cell no-padding">
                        <div class="img-relative-title-ld">
                            <div class="grid">
                                <a class="grid__item">
                                    <div class="box">
                                        <div class="box__shadow"></div>
                                        <img class="box__img" src={apiUrl+this.props.data.secondary_image_description_img} alt="Some image"/>
                                        <h2>{ReactHtmlParser(this.props.data.secondary_image_description_title)}</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: <div class="grid-container custom-grid custom-grid-right">
                    <div class="grid-x grid-padding-x height-750 align-middle">
                        <div class="medium-5 cell">
                            {/*<h2 class="relative-title">Our Services</h2>*/}
                            <h3>{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>
                            <ShowMore lines={COUNT}
                                      more='View more'
                                      less='View less'
                                      anchorClass=''>
                                <p>{ReactHtmlParser(imgPath(this.props.data.image_description_body))}</p>
                            </ShowMore>
                        </div>
                        <div class="medium-7 cell no-padding">
                            <div class="img-relative-title-ld">
                                <div class="grid">
                                    <a class="grid__item">
                                        <div class="box">
                                            <div class="box__shadow"></div>
                                            <img class="box__img" src={apiUrl+this.props.data.image_description_img} alt="Some image"/>
                                            <h2>{ReactHtmlParser(this.props.data.image_description_title)}</h2>
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
