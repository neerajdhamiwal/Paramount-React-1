import React from 'react';

import Img1 from '../assets/img/brilliance-home.png';
import Img2 from '../assets/img/img1.png';
import Img3 from '../assets/img/img1.png';

import {decodeUri} from '../services/common';
import ReactHtmlParser from 'react-html-parser';


class GridOverlap extends React.Component{
    render(){
        return(
            <section className="grid-overlap full-bg-red jumbotron ptb-50-mobile">
                <div className="grid-container">
                    <div className="grid-x align-center align-middle block-overlap-custom height-750">
                        {this.props.data.map((obj, index) => {
                            return <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" class="overlap-grid-hover-effect">

                                    {index==0?<img src={Img2} alt=""/>:''}
                                    {index==1?<img src={Img2} alt=""/>:''}
                                    {index==2?<img src={Img2} alt=""/>:''}

                                    <h3>{ReactHtmlParser(obj.content_flipper_title)}</h3>
                                    <div class="overlap-hover-box">
                                      <h3>{ReactHtmlParser(obj.content_flipper_title)}</h3>
                                      {ReactHtmlParser(obj.content_flipper_description)}
                                    </div>
                                </a>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
export default GridOverlap;
