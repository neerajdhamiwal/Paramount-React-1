import React from 'react';
import Img2 from '../assets/img/img2.png';
import Img1 from '../assets/img/img1.png';

class GridOverlap extends React.Component{
    render(){
        return(
            <section className="grid-overlap full-bg-red jumbotron ptb-50-mobile">
                <div className="grid-container">
                    <div className="grid-x align-center align-middle block-overlap-custom height-750" >
                        <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.2s">
                            <a href="#" class="overlap-grid-hover-effect">
                                <img src={Img2} alt=""/>
                                    <h3>Work Brilliance</h3>
                                    <div class="overlap-hover-box">
                                      <h3>Work Brilliance</h3>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                      <a href="#">Read More</a>
                                    </div>
                            </a>
                        </div>
                        <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.5s">
                            <a href="#" class="overlap-grid-hover-effect">
                                <img src={Img1} alt=""/>
                                    <h3>Tech Capabilities</h3>
                                    <div class="overlap-hover-box">
                                      <h3>Work Brilliance</h3>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                      <a href="#">Read More</a>
                                    </div>

                            </a>
                        </div>
                        <div className="medium-3 cell wow fadeInUp" data-wow-delay="0.8s">
                            <a href="#" class="overlap-grid-hover-effect">
                                <img src={Img2} alt=""/>
                                    <h3>Profound Advisory</h3>
                                    <div class="overlap-hover-box">
                                      <h3>Work Brilliance</h3>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                      <a href="#">Read More</a>
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default GridOverlap;
