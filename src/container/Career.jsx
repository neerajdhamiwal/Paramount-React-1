
import React from 'react';
import Parallax from 'parallax-js';
import BottomFlipBanner from '../component/BottomFlipBanner.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import careerBanner from '../assets/img/career-banner.png';
import careerBanner2 from '../assets/img/career-banner2.png';
import WOW from 'wowjs';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import $ from 'jquery';
let nid = '';

class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            awardsData: {},
            loading: true,
            careerData:[],
            bannerData:[],
            duty: true,
            jobList: []
        }
        this.animation = this.animation.bind(this);
        this.change = this.change.bind(this);
        this.getAllJobs = this.getAllJobs.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        $('#jobList').on('click', 'li a', function() {
            $('#jobList a.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
            }

    componentWillMount(){
        requestService.getService(`/reach-us-data/133`)
            .then((response) => {
                let ids = ['content_ctaflip_id', 'node_flipper_id']
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({bannerData: data},()=>{
                    this.animation();
                });
            })
            .catch((err) => {
                console.log(err);
            })

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
                //this.setState({loading: false});
                this.setState({careerData: data},()=> {
                    //$(document).foundation();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleChange(e){
        if(this.state.duty){
            this.setState({duty: false})
        }
        else{
            this.setState({duty: true})
        }
    }
    change(e){
        //this.setState({loading: true});
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
                    {Object.keys(this.state.bannerData).length>0?
                        <section className="main-banner award-banner">
                            <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                        <h3 className="banner-info"><span>{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_title)}</span><br/>{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_subtitle_title)}</h3>
                        <p>{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_description)}</p>
                        {this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].hasOwnProperty('node_cta_button_title')? this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_title !==''?<a className="button" href={apiUrl+this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_url.substring(9)}>{this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_title}</a>:'':''}
                        {this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].hasOwnProperty('node_cta_button_title')?this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_title !==''?<a className="button" href={apiUrl+this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_url.substring(9)}>{this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_title}</a>:'':''}
                        </div>
                        <div className="medium-6 cell services-sub-menu-two">
                        <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                            <div data-depth="0.3"><img src={careerBanner} alt="" /></div>
                            <div data-depth="0.8"><img src={careerBanner2} alt="" /></div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
                        :''}
                    <div className="clearfix"></div>
                    <div className="clearfix top-100 bottom-100"></div>
                    <section className="job-posting-list top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="medium-2 cell">
                                    <ul className="vertical menu career-page-tab-menu" id="jobList">
                                        <li><a onClick={this.change} id="allJob">All</a></li>
                                        {this.state.jobList.length>0 ? this.state.jobList.map((obj)=>{
                                            return <li><a onClick={this.change} id={obj.job_id}>{obj.job_name}</a></li>
                                        }) : <div></div>}
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
                                                    <a className="accordion-title" aria-controls={`tab${obj.nid}`} role="tab" id={`job${obj.nid}`} aria-expanded="false" aria-selected="false">
                                                        <div className="job-title">{obj.node_title}</div>
                                                        <span className="location-view">
                                                            <div className="view-job-btn">View Job</div>
                                                        </span>
                                                    </a>
                                                    {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                                                    <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby={`job${obj.nid}`} aria-hidden="true" id={`tab${obj.nid}`}>
                                                        <div className="grid-x align-justify">
                                                            <div className="cell medium-8" id="coltab">
                                                                <div className="job-deties-req">
                                                                            <a> <div className={this.state.duty?'activeTab job-duties':'job-duties'} onClick={this.handleChange}>Duties</div></a>
                                                                            <a> <div className={!(this.state.duty)?'activeTab job-req':'job-req'} role="tab"  onClick={this.handleChange}>Requirement</div></a>
                                                                </div>
                                                                {this.state.duty?<p>
                                                                        {ReactHtmlParser(obj.node_duties)}
                                                                    </p>: <p>
                                                                        {ReactHtmlParser(obj.node_requirements)}
                                                                    </p>}
                                                            </div>
                                                            <div className="cell medium-4">
                                                                <div className="location-block">
                                                                    <h6>Job Sites</h6>
                                                                    <p>{ReactHtmlParser(obj.node_job_site)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p><a className="button" href="mailto:priya.k@opensenselabs.com">Apply Now</a></p>
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
                    {this.state.bannerData.hasOwnProperty('content_ctaflip_id')?<BottomFlipBanner nodeData={this.state.bannerData['content_ctaflip_id'][0]}/>:''}                    {/*<!-- left-image-right-content Section Ends Here -->*/}
                </div>
        )
    }
}
export default About;
