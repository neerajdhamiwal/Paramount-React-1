
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
                                    <li><a href="/expertise?nid=35">About Us</a>
                                        <ul className="menu dropdown-menu-an">
                                            {/*<li><a href="/team?nid=42">Team</a></li>*/}
                                            {/*<li><a href="#">Leadership</a></li>*/}
                                            <li><a href="/awards?nid=46">Community</a></li>
                                            <li><a href="/awards?nid=33">Awards & Certifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Services</a>
                                      <ul className="menu dropdown-menu-an">
                                        <li><a href="/exp-article?nid=24"> Paramount Edge</a></li>
                                        <li><a href="/exp-article?nid=39">Paramount TechExec</a></li>
                                        <li><a href="">Paramount Techadvisory</a>
                                            <ul className="menu dropdown-menu-an">
                                            <li><a href="/exp-article?nid=47">Content Management Systems & Mobile App Development</a></li>
                                            <li><a href="/exp-article?nid=48">Application Maintenance, Development & Integration</a></li>
                                            <li><a href="/expertise?nid=49">Infrastructure Management & Monitoring</a></li>
                                        </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li><a href="/expertise?nid=38">Expertise</a>
                                        <ul className="menu dropdown-menu-an">
                                            {/*<li><a href="/exp-article?nid=45">Industries</a></li>*/}
                                            <li><a href="/exp-article?nid=45">Technologies</a></li>
                                            <li><a href="/exp-article?nid=52">Government</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/resource">Resources</a>
                                        <ul className="menu dropdown-menu-an">
                                            <li><a href="/blog">Blogs</a></li>
                                            <li><a href="/caseStudy">Case Studies</a></li>
                                            <li><a href="#">White Papers</a></li>
                                            <li><a href="/infographic">Infographics</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/team?nid=51">Contact Us</a></li>
                                    <li><a href="/career">Careers</a></li>
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
