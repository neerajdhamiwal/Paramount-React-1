
import React from 'react';
import Logo from '../assets/img/logo.png';

class Header extends React.Component{
    constructor(props){
        super(props)
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
                                <ul className="menu align-right dropdown" data-dropdown-menu>
                                    <li><a href="/expertise?nid=35">About Us</a>
                                        <ul class="menu dropdown-menu-an">
                                            {/*<li><a href="/team?nid=42">Team</a></li>*/}
                                            {/*<li><a href="#">Leadership</a></li>*/}
                                            <li><a href="/awards?nid=46">Community</a></li>
                                            <li><a href="/awards?nid=33">Awards & Certifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Services</a>
                                      <ul class="menu dropdown-menu-an">
                                        <li><a href="/exp-article?nid=24"> Paramount Edge</a></li>
                                        <li><a href="/exp-article?nid=39">Paramount TechExec</a></li>
                                        <li><a href="">Paramount Techadvisory</a>
                                            <ul class="menu dropdown-menu-an">
                                            <li><a href="/exp-article?nid=47">Content Management Systems & Mobile App Development</a></li>
                                            <li><a href="/exp-article?nid=48">Application Maintenance, Development & Integration</a></li>
                                            <li><a href="/exp-article?nid=49">Infrastructure Management & Monitoring</a></li>
                                        </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li><a href="/expertise?nid=38">Expertise</a>
                                        <ul class="menu dropdown-menu-an">
                                            {/*<li><a href="/exp-article?nid=45">Industries</a></li>*/}
                                            <li><a href="/exp-article?nid=45">Technologies</a></li>
                                            <li><a href="/exp-article?nid=52">Government</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/resource">Resources</a>
                                        <ul class="menu dropdown-menu-an">
                                            <li><a href="/casestudy">Blogs</a></li>
                                            <li><a href="/casestudy">Case Studies</a></li>
                                            <li><a href="#">White Papers</a></li>
                                            <li><a href="#">Infographics</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/team?nid=37">Contact Us</a></li>
                                    <li><a href="/team?nid=42">Careers</a></li>
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
