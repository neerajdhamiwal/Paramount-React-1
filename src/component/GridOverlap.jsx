import React from 'react';
import Img1 from '../assets/img/brillianceh.png';
import Img2 from '../assets/img/technologyh.png';
import Img3 from '../assets/img/advisoryh.png';
import Imgm from '../assets/img/brilliance-mobile.png';
import Imgm2 from '../assets/img/technology-mobile.png';
import Imgm3 from '../assets/img/advisory-mobile.png';
import $ from 'jquery';
import {imgPath} from '../services/common';
import ReactHtmlParser from 'react-html-parser';

class GridOverlap extends React.Component{

  componentDidMount(){
        if ($(window).width() < 767) {
          $('#gridoverlapslider').addClass('mobile-carousel2');
         } else {
            $('#gridoverlapslider').removeClass('mobile-carousel2');
        }

        $('.mobile-carousel2').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          //variableWidth: true
        });
  }

    render(){
        return(
            <section className="grid-overlap full-bg-red jumbotron ptb-50-mobile">
                <div className="grid-container">
                    <div className="grid-x align-center align-middle block-overlap-custom height-600" id="gridoverlapslider">
                        {this.props.data.map((obj, index) => {
                            return <div key = {index} className="medium-3 cell wow fadeInUp" data-wow-delay="0.2s">
                                <div  className="overlap-grid-hover-effect">

                                <div className="hide-for-small-only">
                                    {index===0?<img src={Img1} alt=""/>:''}
                                    {index===1?<img src={Img2} alt=""/>:''}
                                    {index===2?<img src={Img3} alt=""/>:''}
                                </div>

                                <div className="show-for-small-only">
                                    {index===0?<img src={Imgm} alt=""/>:''}
                                    {index===1?<img src={Imgm2} alt=""/>:''}
                                    {index===2?<img src={Imgm3} alt=""/>:''}
                                </div>
                                    <h3>{ReactHtmlParser(obj.content_flipper_title)}</h3>
                                    <div className="overlap-hover-box">
                                      <h3>{ReactHtmlParser(obj.content_flipper_title)}</h3>
                                      {ReactHtmlParser(imgPath(obj.content_flipper_description))}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
export default GridOverlap;
