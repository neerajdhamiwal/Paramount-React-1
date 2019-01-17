
import React from 'react';
import Logo from '../assets/img/logo.png';
import $ from 'jquery';

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $('#menu-tabs').on('click', 'li', function() {
            $('#menu-tabs li.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }
    render(){
        return(
            <header>
                <div className="grid-container">
                    <div className="grid-x header-inner align-middle">
                        <div className="medium-4 small-6 cell"><h1><a href="/"><img src={Logo} alt="Paramount Software Solution" /></a></h1></div>
                        <div className="medium-8  small-6 cell text-right">
                            <button className="menu-icon" type="button" data-toggle="offCanvas"></button>
                            <nav className="main-menu show-for-medium">
                                <ul className="menu align-right dropdown" data-dropdown-menu id="menu-tabs">
                                    <li><a className="cursorDefault">About Us</a>
                                        <ul className="menu dropdown-menu-an">
                                            <li><a href="/about-paramount">Our Story</a></li>
                                            <li><a href="/team">Team</a></li>
                                            <li><a href="/about-paramount/community">Community</a></li>
                                            <li><a href="/about-paramount/awards-and-certifications">Awards & Certifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="cursorDefault">Services</a>
                                      <ul className="menu dropdown-menu-an">
                                        <li><a href="/services/paramount-edge">TechEdge</a></li>
                                        <li><a href="/services/paramount-tech-exec">TechExec</a></li>
                                        <li><a className="cursorDefault">TechAdvisory</a>
                                            <ul className="menu dropdown-menu-an">
                                            <li><a href="/services/paramounttechadvisory/application-maintenance-development-integration">Application, Development & Integration</a></li>
                                            <li><a href="/services/paramounttechadvisory/infrastructuremanagement-and-monitoring">Infrastructure Management & Monitoring</a></li>
                                            <li><a href="/services/paramounttechadvisory/cms-and-app-development">Content Management Systems & Mobile App Development</a></li>
                                            </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li><a href="/expertise">Expertise</a>
                                        <ul className="menu dropdown-menu-an">
                                            <li><a href="/expertise/technologies">Technologies</a></li>
                                            <li><a href="/expertise/government-solutions">Government</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/resources">Resources</a>
                                        <ul className="menu dropdown-menu-an">
                                            <li><a href="/resources/blogs">Blogs</a></li>
                                            <li><a href="/resources/casestudies">Case Studies</a></li>
                                            <li><a >White Papers</a></li>
                                            <li><a href="/infographic">Infographics</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="/careers">Careers</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
