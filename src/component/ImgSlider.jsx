
import React from 'react';
import {apiUrl, decodeUri} from '../services/common.js';
import $ from 'jquery';

class ImgSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logo : [1,2]
        }
    }

    createSlick(){
            $(`.single-item${this.props.id}`).slick({
            fade: true
        });
    }
    componentDidMount(){
        this.createSlick()
    }

    render(){
        return(
          <div className="grid-container img-slider">
            <div className={`carousel single-item${this.props.id}`}>
                {
                    this.props.imgArray.map((img, i) => {
                        return <div key={i} className="slide-img"><img src={apiUrl+decodeUri(img)} width="595" alt="destination" /></div>
                            })

                }
            </div>
          </div>
    )
    }
}
export default ImgSlider;
