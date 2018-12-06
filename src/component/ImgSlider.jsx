
import React from 'react';
import ArrowLeft from '../assets/img/arrow-left.svg';
import ArrowRight from '../assets/img/arrow-right.svg';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';


class ImgSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logo : [1,2]
        }
    }

    createSlick(){
        // $('.slider-for').each((key, item)=> {
        //     var sliderIdName = 'slider' + key;
        //     this.id = sliderIdName;
        //     $('.slider-nav')[key].id = sliderNavIdName;
        //
        // });
            $(`.single-item${this.props.id}`).slick({
            fade: true
        });
    }
    componentDidMount(){
       // $('.slick-prev').css({"left": "0", "background": `url(${ArrowLeft}) left center no-repeat`});
       // $('.slick-next').css({"left": "60px", "background": `url(${ArrowRight}) left center no-repeat`});
        this.createSlick()
        //$(window).on( 'resize', this.createSlick );
    }

    render(){
        console.log('props', this.props.imgArray);
        return(
          <div className="grid-container img-slider">
            <div className={`carousel single-item${this.props.id}`}>
                {
                    this.props.imgArray.map(img => {
                        return <div className="slide-img"><img src={apiUrl+img} width="595" alt="destination" /></div>
                            })

                }
            </div>
          </div>
    )
    }
}
export default ImgSlider;
