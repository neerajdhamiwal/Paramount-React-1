
import React from 'react';
import Logo from '../assets/img/logo.png';
import $ from 'jquery';

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // $('#menu-tabs').on('click', 'li', function() {
        //     $('#menu-tabs li.is-active').removeClass('is-active');
        //     $(this).addClass('is-active');
        // });
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
                                    <li><a href="/about-paramount">About Us</a>
                                        <ul className="menu dropdown-menu-an">
                                            {/*<li><a href="/team?nid=42">Team</a></li>*/}
                                            {/*<li><a href="#">Leadership</a></li>*/}
                                            <li><a href="/about-paramount/community">Community</a></li>
                                            <li><a href="/about-paramount/awards-and-certifications">Awards & Certifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a >Services</a>
                                      <ul className="menu dropdown-menu-an">
                                        <li><a href="/services/paramount-edge"> Paramount Edge</a></li>
                                        <li><a href="/services/paramount-tech-exec">Paramount TechExec</a></li>
                                        <li><a href="">Paramount Techadvisory</a>
                                            <ul className="menu dropdown-menu-an">
                                            <li><a href="/services/paramount techadvisory/cms-and-app-development">Content Management Systems & Mobile App Development</a></li>
                                            <li><a href="/services/paramount techadvisory/application-maintenance-development-integration">Application Maintenance, Development & Integration</a></li>
                                            <li><a href="/services/paramount techadvisory/infrastructure management-and-monitoring">Infrastructure Management & Monitoring</a></li>
                                        </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li><a href="/expertise">Expertise</a>
                                        <ul className="menu dropdown-menu-an">
                                            {/*<li><a href="/exp-article?nid=45">Industries</a></li>*/}
                                            <li><a href="/expertise/technologies">Technologies</a></li>
                                            <li><a href="/expertise/government-solutions">Government</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/resources">Resources</a>
                                        <ul className="menu dropdown-menu-an">
                                            <li><a href="/resources/blogs">Blogs</a></li>
                                            <li><a href="/resources/case studies">Case Studies</a></li>
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
