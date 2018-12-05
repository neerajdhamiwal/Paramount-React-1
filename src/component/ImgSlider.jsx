
import React from 'react';
import logo1 from '../assets/img/placeholder.png';
import logo2 from '../assets/img/placeholder2.png';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';


class ImgSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logo : [1,2,3,4,5]
        }
    }
    componentDidMount(){
      $('.single-item').slick({
        fade: true
      });
    }
    render(){
        console.log(this.props.imgArray);
        return(
          <div className="grid-container img-slider">
            <div className="carousel single-item">
                {
                    this.props.imgArray.map((img) => {
                        <div className="slide-img"><img src={apiUrl+img} width="595" alt="destination" /></div>
                    })
                }
            </div>
          </div>
    )
    }
}
export default ImgSlider;
