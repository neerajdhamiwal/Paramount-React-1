

import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import expBanner from '../assets/img/expertise-banner.png';
import MainBanner from '../component/MainBanner.jsx'
import AwardSlider from '../component/AwardsBottomSlider.jsx'
import CertSlider from '../component/CertificationBottomSlider.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import WOW from 'wowjs';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import $ from 'jquery';

let nid = '';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
//import 'foundation/js/vendor/zepto';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            awardsData: {},
            loading: true,
            careerData:[]
        }
        this.animation = this.animation.bind(this);
        this.change = this.change.bind(this);
        this.getAllJobs = this.getAllJobs.bind(this);
    }

    animation(){
        new WOW.WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        ).init();

        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);
    }

    componentWillMount(){
        requestService.getService(`/job-data`)
            .then((response) => {
                this.setState({jobList: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
        this.getAllJobs();
    }
    getAllJobs(){
        requestService.getService(`/career-all-data`)
            .then((response) => {
                let ids = ['job_id','nid'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({careerData: data},()=>{
                    $(document).foundation();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    requestJob(id){
        requestService.getService(`/career-type-data/${id}`)
            .then((response) => {
                let ids = ['job_id','nid'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({careerData: data},()=> {
                    $(document).foundation();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    change(e){
        this.setState({loading: true});
        if(e.target.id=='allJob'){
            this.getAllJobs()
        }
        else{
            this.requestJob(e.target.id);
        }
    }

    render(){
        return(
            this.state.loading? <center >
                    <Loader
                        type="ThreeDots"
                        color="#fd302a"
                        height="100"
                        width="100"
                    />
                </center> :
                <div>
                    <section className="main-banner bottom-100 award-banner team-scnd-banner career-banner">
                        <div className="grid-container custom-grid custom-grid-right">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-5 cell small-order-change">
                                    <h3 className="banner-info"><span>Make a</span><br/>
                                        Career</h3>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>
                                    <div className="banner-img-link">
                                        <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">
                                            <div className="cell shrink team-banner-be"><a href="#">Be Curious</a></div>
                                            <div className="cell shrink team-banner-be"><a href="#">Be a Leader</a></div>
                                            <div className="cell shrink team-banner-be"><a href="#">Be Human</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="medium-6 cell">
                                    <img src={expBanner} alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="clearfix"></div>
                    <div className="clearfix top-100 bottom-100"></div>
                    <section className="job-posting-list top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="medium-2 cell">
                                    <ul className="vertical menu career-page-tab-menu">
                                        <li><a onClick={this.change} id="allJob">All</a></li>
                                        {this.state.jobList.map((obj)=>{
                                            return <li><a onClick={this.change} id={obj.job_id}>{obj.job_name}</a></li>

                                        })}

                                    </ul>
                                </div>
                                <div className="medium-10 cell">
                                    {/*<div className="grid-x grid-padding-x align-justify align-middle">*/}
                                        {/*<div className="cell small-3 open-position">Open Position ></div>*/}
                                        {/*<div className="cell small-3">*/}
                                            {/*<label className="job-select">*/}
                                                {/*<select>*/}
                                                    {/*<option value="husker">Job Location</option>*/}
                                                    {/*<option value="starbuck">Starbuck</option>*/}
                                                    {/*<option value="hotdog">Hot Dog</option>*/}
                                                    {/*<option value="apollo">Apollo</option>*/}
                                                {/*</select>*/}
                                            {/*</label>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {this.state.loading?
                                        <Loader
                                            type="ThreeDots"
                                            color="#fd302a"
                                            height="100"
                                            width="100"
                                        />:
                                        <ul className="accordion" data-accordion data-allow-all-closed="true" id="job-tabs">
                                            {this.state.careerData.hasOwnProperty('nid')?
                                                this.state.careerData['nid'][0].map((obj, i)=>{
                                                return <li className="accordion-item" data-accordion-item="" >
                                                    {/*<!-- Accordion tab title -->*/}
                                                    <a className="accordion-title" aria-controls={`tab${obj.job_id}`} role="tab" id={`job${obj.job_id}`} aria-expanded="false" aria-selected="false">
                                                        <div className="job-title">{obj.node_title}</div>
                                                        <span className="location-view">Location
                                                            <div className="view-job-btn">View Job</div>
                                                        </span>
                                                    </a>
                                                    {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                                                    <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby={`job${obj.job_id}`} aria-hidden="true" id={`tab${obj.job_id}`}>
                                                        <div className="grid-x align-justify">
                                                            <div className="cell medium-8" id="coltab">
                                                                <div className="job-deties-req">
                                                                    <ul id="col-tabs">
                                                                        <li>
                                                                            <a> <div className="job-duties" aria-controls={`columntab${obj.job_id}0`} role="tab" aria-expanded="true" aria-selected="true">Duties</div></a>
                                                                        </li>
                                                                        <li>
                                                                            <a> <div className="job-req" aria-controls={`columntab${obj.job_id}1`} role="tab" aria-expanded="false" aria-selected="false">Requirement</div></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div data-tabs-content="col-tabs">
                                                                <p id={`columntab${obj.job_id}0`} aria-hidden="false">
                                                                    {ReactHtmlParser(obj.node_duties)}
                                                                </p>
                                                                <p id={`columntab${obj.job_id}1`}  aria-hidden="true">
                                                                    {ReactHtmlParser(obj.node_requirements)}
                                                                </p>
                                                                </div>
                                                            </div>
                                                            <div className="cell medium-4">
                                                                <div className="location-block">
                                                                    <h6>Job Sites</h6>
                                                                    <p>{ReactHtmlParser(obj.node_job_site)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p><button className="button">Apply Now</button></p>
                                                    </div>
                                                </li>
                                                }):''
                                            }
                                        </ul>}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- Main Banner Section Ends Here -->*/}
                    {/*<!-- left-image-right-content Section Starts Here -->*/}
                    <section className="right-image-left-content top-100">
                        <div className="grid-container custom-grid custom-grid-right">
                            <div className="grid-x grid-padding-x height-750 pl-100 align-middle">
                                <div className="medium-6 cell small-order-change">
                                    <div className="pr-155">
                                        <h2 className="relative-title title-one">Our Services</h2>
                                        <h3 className="heading-content ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <div className="medium-6 cell no-padding">
                                    <div className="img-relative-title-ld">
                                        <div className="grid">

                                            <a className="grid__item" href="#">
                                                <div className="box">
                                                    <div className="box__shadow"></div>
                                                    <img className="box__img" src={award4} alt="Some image"/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- left-image-right-content Section Ends Here -->*/}
                </div>
        )
    }
}
export default About;
