
import React from 'react';
import Headercomp from '../component/Header.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import Footer from '../component/Footer.jsx';
import bannerAwarBgImg from '../assets/img/award-banner-bg.png';
import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Expertise extends React.Component{
    componentDidMount(){
        $(document).foundation();
    }
    render(){
        return(
            <div>
                <section className="main-banner award-banner">
                    <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                            <div className="medium-4 cell small-order-change">
                                <h3 className="banner-info"><span>Our</span><br/>
                                    Awards</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>
                                <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.</p>
                            </div>
                            <div className="medium-6 cell">
                                <img src={bannerAwarBgImg} alt=""/>
                            </div>

                        </div>

                    </div>
                </section>
                <div className="top-100 bottom-100 clearfix"></div>
                <AccordionTab/>
                <div className="top-100 bottom-100 clearfix"></div>
            </div>
        )
    }
}
export default Expertise;

