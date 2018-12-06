
import React from 'react';
import logo1 from '../assets/img/placeholder.png';
import logo2 from '../assets/img/placeholder2.png';
class ImgSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            logo : [1,2]
        }
    }
  
    render(){
        return(
          <div className="grid-container img-slider">
            <div className="carousel single-item">
              <div className="slide-img"><img src={logo1} width="595" alt="destination" /></div>
              <div className="slide-img"><img src={logo2}  width="595" alt="destination" /></div>
            </div>
          </div>
    )
    }
}
export default ImgSlider;
