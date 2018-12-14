

import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import MainBanner from '../component/MainBanner.jsx'
import AwardSlider from '../component/AwardsBottomSlider.jsx'
import CertSlider from '../component/CertificationBottomSlider.jsx'
import BottomFlipBanner from '../component/BottomFlipBanner.jsx'
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
            careerData:[],
            bannerData:[]
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
    }

    componentWillMount(){
        requestService.getService(`/reach-us-data/131`)
            .then((response) => {
                let ids = ['content_ctaflip_id', 'node_flipper_id']
                let data = jsonMiddleware(response.data, ids)
                this.setState({bannerData: data},()=>{
                    // $(document).foundation();
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
    handleChange(e){
        $(`.${e.target.id}`).removeClass('hide');
        $(`.${e.target.id}`).addClass('show');
        console.log( $(`.${e.target.id}`)[0])

        // $('.'+$(`.${e.target.id}`).nextSibling.classList[0]).addClass('show');
        // $(`.${e.target.id}`).sibling().removeClass('hide');
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
                    {Object.keys(this.state.bannerData).length>0? <MainBanner node={this.state.bannerData[Object.keys(this.state.bannerData)[0]][0]} nid='career'/>:''}
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
                                                    <a className="accordion-title" aria-controls={`tab${obj.nid}`} role="tab" id={`job${obj.nid}`} aria-expanded="false" aria-selected="false">
                                                        <div className="job-title">{obj.node_title}</div>
                                                        <span className="location-view">Location
                                                            <div className="view-job-btn">View Job</div>
                                                        </span>
                                                    </a>
                                                    {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                                                    <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby={`job${obj.nid}`} aria-hidden="true" id={`tab${obj.nid}`}>
                                                        <div className="grid-x align-justify">
                                                            <div className="cell medium-8" id="coltab">
                                                                <div className="job-deties-req">

                                                                            <a> <div className="job-duties" id={`duty${obj.nid}`} onClick={this.handleChange}>Duties</div></a>
                                                                            <a> <div className="job-req" role="tab" id={`req${obj.nid}`} onClick={this.handleChange}>Requirement</div></a>

                                                                </div>
                                                                <p className={`duty${obj.nid}`}>
                                                                    {ReactHtmlParser(obj.node_duties)}
                                                                </p>
                                                                <p className={`req${obj.nid} hide`}>
                                                                    {ReactHtmlParser(obj.node_requirements)}
                                                                </p>

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
                    {this.state.bannerData.hasOwnProperty('content_ctaflip_id')?<BottomFlipBanner nodeData={this.state.bannerData['content_ctaflip_id'][0]}/>:''}                    {/*<!-- left-image-right-content Section Ends Here -->*/}
                </div>
        )
    }
}
export default About;
