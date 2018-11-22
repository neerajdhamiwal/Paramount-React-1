import React from 'react';
import Img2 from '../assets/img/img2.png';
import Img1 from '../assets/img/img1.png';

class GridOverlap extends React.Component{
    render(){
        return(
            <section className="grid-overlap full-bg-red top-100 bottom-100">
                <div className="grid-container">
                    <div className="grid-x align-center align-middle block-overlap-custom height-750" >
                        <div className="medium-3 cell">
                            <a href="#">
                                <img src={Img2} alt=""/>
                                    <h3>Work Brilliance</h3>
                            </a>
                        </div>
                        <div className="medium-3 cell">
                            <a href="#">
                                <img src={Img1} alt=""/>
                                    <h3>Tech Capabilities</h3>
                            </a>
                        </div>
                        <div className="medium-3 cell">
                            <a href="#">
                                <img src={Img2} alt=""/>
                                    <h3>Profound Advisory</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default GridOverlap;
