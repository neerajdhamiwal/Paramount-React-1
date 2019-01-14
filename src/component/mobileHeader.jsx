
import React from 'react';
class MobHeader extends React.Component{
    render(){
        return(
            <div className="off-canvas position-right" id="offCanvas" data-off-canvas>

                <button className="close-button" aria-label="Close menu" type="button" data-close="">
                    <span aria-hidden="true">&times;</span>
                </button>
                <nav className="main-menu show-for-small">
                                <ul className="menu align-start dropdown" data-dropdown-menu id="menu-tabs">
                                    <li><a>About Us</a>
                                        <ul className="menu dropdown-menu-an">
                                        <li><a href="/about-paramount">Our Story</a></li>
                                        <li><a href="/about-paramount/community">Community</a></li>
                                        <li><a href="/about-paramount/awards-and-certifications">Awards & Certifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Services</a>
                                      <ul className="menu dropdown-menu-an">
                                      <li><a href="/services/paramount-edge">TechEdge</a></li>
                                      <li><a href="/services/paramount-tech-exec">TechExec</a></li>
                                        <li><a>Paramount Techadvisory</a>
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
                                            {/*<li><a href="/exp-article?nid=45">Industries</a></li>*/}
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
        )
    }
}
export default MobHeader;
