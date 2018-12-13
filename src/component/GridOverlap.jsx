import React from 'react';

import Img1 from '../assets/img/brillianceh.png';
import Img2 from '../assets/img/technologyh.png';
import Img3 from '../assets/img/advisoryh.png';

import {decodeUri} from '../services/common';
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
                    <div className="grid-x align-center align-middle block-overlap-custom height-750" id="gridoverlapslider">
                        {this.props.data.map((obj, index) => {
                            return <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" class="overlap-grid-hover-effect">

                                    {index==0?<img src={Img1} alt=""/>:''}
                                    {index==1?<img src={Img2} alt=""/>:''}
                                    {index==2?<img src={Img3} alt=""/>:''}

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
