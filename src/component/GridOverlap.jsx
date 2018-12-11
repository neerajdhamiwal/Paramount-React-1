import React from 'react';
import Img2 from '../assets/img/img2.png';
import Img1 from '../assets/img/img1.png';
import {decodeUri} from '../services/common'

class GridOverlap extends React.Component{
    render(){
        return(
            <section className="grid-overlap full-bg-red jumbotron ptb-50-mobile">
                <div className="grid-container">
                    <div className="grid-x align-center align-middle block-overlap-custom height-750" >
                        {this.props.data.map((obj) => {
                            return <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#">
                                    <img src={Img2} alt=""/>
                                    <h3>{obj.content_flipper_description}</h3>
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
