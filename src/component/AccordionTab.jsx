import React from 'react';
import placeholderImg from '../assets/img/placeholder.png'
class AccordionaTab extends React.Component{
    render(){
        return(
            <section className="tab-accordion">
                <div className="grid-container  custom-grid custom-grid-right">
                    <div className="grid-x">
                        <div className="medium-2 cell">
                            <ul className="accordion" data-responsive-accordion-tabs="accordion medium-tabs" id="service-tabs">
                                <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Service One</a></li>
                                <li className="tabs-title"><a href="#panel2">Service Two</a></li>
                                <li className="tabs-title"><a href="#panel3">Service Three</a></li>
                                <li className="tabs-title"><a href="#panel4">Service Four</a></li>
                                <li className="tabs-title"><a href="#panel5">Service Five</a></li>
                                <li className="tabs-title"><a href="#panel6">Service Six</a></li>
                            </ul>
                        </div>
                        <div className="medium-10 cell">
                            <div className="tabs-content" data-tabs-content="service-tabs">
                                <div className="tabs-panel is-active" id="panel1">

                                    <div className="grid-x grid-padding-x">
                                        <div className="medium-5 cell">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="medium-7 cell no-padding">
                                            <div className="img-relative-title-ld">
                                                <h2 className="relative-title">Our Services</h2>
                                                <img src={placeholderImg} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-panel" id="panel2">
                                    <p>two</p>
                                    <img className="thumbnail" src=""/>
                                </div>
                                <div className="tabs-panel" id="panel3">
                                    <p>three</p>
                                    <p>Check me out! I'm a super cool Tab panel with text content!</p>
                                </div>
                                <div className="tabs-panel" id="panel4">
                                    <p>four</p>
                                    <img className="thumbnail" src=""/>
                                </div>
                                <div className="tabs-panel" id="panel5">
                                    <p>five</p>
                                    <p>Check me out! I'm a super cool Tab panel with text content!</p>
                                </div>
                                <div className="tabs-panel" id="panel6">
                                    <p>six</p>
                                    <img className="thumbnail" src=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AccordionaTab;
