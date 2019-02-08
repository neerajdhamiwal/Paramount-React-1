
import React from 'react';
import $ from 'jquery';
import requestService from '../services/request.js';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars



class MobHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: []
        }
    }
    componentWillMount(){
        requestService.getService(`/api/menu_items/paramount-main-menu?_format=json`)
            .then((response) => {
                this.setState({menu :response.data},()=> {
                    $(document).foundation();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount(){
        $('#menu-tabs').on('click', 'li', function() {
            $('#menu-tabs li.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }
    render(){
        return(
            <div className="off-canvas position-right" id="offCanvas" data-off-canvas>

                <button className="close-button" aria-label="Close menu" type="button" data-close="">
                    <span aria-hidden="true">&times;</span>
                </button>
                <nav className="main-menu show-for-small">
                                {/*<ul className="menu align-start dropdown" data-dropdown-menu id="menu-tabs">*/}
                                    {/*<li>*/}
                                        {/*{ //eslint-disable-next-line*/}
                                        {/*}<a>*/}
                                        {/*About Us*/}
                                    {/*</a>*/}
                                        {/*<ul className="menu dropdown-menu-an">*/}
                                        {/*<li><a href="/about-paramount">Our Story</a></li>*/}
                                        {/*<li><a href="/about-paramount/community">Community</a></li>*/}
                                        {/*<li><a href="/about-paramount/awards-and-certifications">Awards & Certifications</a></li>*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*{ //eslint-disable-next-line*/}
                                        {/*}<a>Services</a>*/}
                                      {/*<ul className="menu dropdown-menu-an">*/}
                                      {/*<li><a href="/services/paramount-edge">TechEdge</a></li>*/}
                                      {/*<li><a href="/services/paramount-tech-exec">TechExec</a></li>*/}
                                        {/*<li>{ //eslint-disable-next-line*/}
                                        {/*}<a>Paramount Techadvisory</a>*/}
                                            {/*<ul className="menu dropdown-menu-an">*/}
                                            {/*<li><a href="/services/paramounttechadvisory/application-maintenance-development-integration">Application, Development & Integration</a></li>*/}
                                            {/*<li><a href="/services/paramounttechadvisory/infrastructuremanagement-and-monitoring">Infrastructure Management & Monitoring</a></li>*/}
                                            {/*<li><a href="/services/paramounttechadvisory/cms-and-app-development">Content Management Systems & Mobile App Development</a></li>*/}
                                        {/*</ul>*/}
                                        {/*</li>*/}
                                      {/*</ul>*/}
                                    {/*</li>*/}
                                    {/*<li><a href="/expertise">Expertise</a>*/}
                                        {/*<ul className="menu dropdown-menu-an">*/}
                                            {/*/!*<li><a href="/exp-article?nid=45">Industries</a></li>*!/*/}
                                            {/*<li><a href="/expertise/technologies">Technologies</a></li>*/}
                                            {/*<li><a href="/expertise/government-solutions">Government</a></li>*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                    {/*<li><a href="/resources">Resources</a>*/}
                                        {/*<ul className="menu dropdown-menu-an">*/}
                                            {/*<li><a href="/resources/blogs">Blogs</a></li>*/}
                                            {/*<li><a href="/resources/casestudies">Case Studies</a></li>*/}
                                            {/*<li>{ //eslint-disable-next-line*/}
                                            {/*}<a >White Papers</a></li>*/}
                                            {/*<li><a href="/infographic">Infographics</a></li>*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                    {/*<li><a href="/contact">Contact Us</a></li>*/}
                                    {/*<li><a href="/careers">Careers</a></li>*/}
                                {/*</ul>*/}

                             {this.state.menu.length>0? <ul className="menu align-start dropdown" data-dropdown-menu id="menu-tabs">

                        {
                                this.state.menu.map((obj, i)=> {
                                    if(obj.hasOwnProperty('below')) { //eslint-disable-next-line
                                        return <li key={'obj'+i}><Link className={obj.relative==='/'?'cursorDefault':''} to={obj.relative!=='/'? `${obj.relative}`:"javascript:void(0);"}>{obj.title}</Link>
                                            <ul className="menu dropdown-menu-an">
                                                {obj.below.map((subObj, i) => {  //eslint-disable-next-line
                                                    return <li key={'subObj'+i}><Link className={subObj.relative==='/'?'cursorDefault':''} to={subObj.relative!=='/'? `${subObj.relative}`:"javascript:void(0);"}>{subObj.title}</Link>
                                                        {subObj.hasOwnProperty('below')?
                                                            <ul className="menu dropdown-menu-an">
                                                                {subObj.below.map((subsubObj, i) => { //eslint-disable-next-line
                                                                    return <li key={'subsubObj'+i}><Link className={subsubObj.relative==='/'?'cursorDefault':''} to={subsubObj.relative!=='/'? `${subsubObj.relative}`:"javascript:void(0);"}>{subsubObj.title}</Link></li>
                                                                })}
                                                            </ul> : ''
                                                        }
                                                    </li>
                                                })}
                                            </ul>
                                        </li>
                                    }
                                    else{
                                        return <li key={'obj'+i}><Link to={`/${obj.alias}`}>{obj.title}</Link></li>
                                    }
                                })
                            }
                        </ul>:'' }
                            </nav>

            </div>
        )
    }
}
export default MobHeader;
