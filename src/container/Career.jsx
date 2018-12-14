

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
                let ids = ['job_id'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({jobList: data});
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService(`/career-all-data`)
            .then((response) => {
                let ids = ['job_id','nid'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({careerData: data});
            })
            .catch((err) => {
                console.log(err);
            })
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
                    {/*<section className="main-banner bottom-100 award-banner team-scnd-banner career-banner">*/}
                        {/*<div className="grid-container custom-grid custom-grid-right">*/}
                            {/*<div className="grid-x align-right align-middle grid-margin-x">*/}
                                {/*<div className="medium-5 cell small-order-change">*/}
                                    {/*<h3 className="banner-info"><span>Make a</span><br/>*/}
                                        {/*Career</h3>*/}
                                    {/*<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>*/}
                                    {/*<div className="banner-img-link">*/}
                                        {/*<div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">*/}
                                            {/*<div className="cell shrink team-banner-be"><a href="#">Be Curious</a></div>*/}
                                            {/*<div className="cell shrink team-banner-be"><a href="#">Be a Leader</a></div>*/}
                                            {/*<div className="cell shrink team-banner-be"><a href="#">Be Human</a></div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="medium-6 cell">*/}
                                    {/*<img src={expBanner} alt=""/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</section>*/}
                    {/*<div className="clearfix"></div>*/}
                    {/*<div className="clearfix top-100 bottom-100"></div>*/}
                    {/*<section className="job-posting-list top-100 bottom-100">*/}
                        {/*<div className="grid-container">*/}
                            {/*<div className="grid-x grid-padding-x">*/}
                                {/*<div className="medium-2 cell">*/}
                                    {/*<ul className="vertical menu career-page-tab-menu">*/}
                                        {/*{this.state.jobList.map((obj, i) => {*/}
                                            {/*<li><a href="#">{obj.job_name}</a></li>*/}
                                        {/*})}*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="medium-10 cell">*/}
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
                                    {/*<ul className="accordion" data-accordion data-allow-all-closed="true">*/}
                                        {/*{this.state.careerData['job_id'][0].map((obj,i) => {*/}
                                            {/*return <li className="accordion-item " data-accordion-item="">*/}
                                                {/*<a href="#" className="accordion-title" aria-controls="quwu2w-accordion" role="tab" id="quwu2w-accordion-label" aria-expanded="false" aria-selected="false">*/}
                                                    {/*<div className="job-title">{obj.node_title}</div>*/}
                                                    {/*<span className="location-view">{obj.node_job_site}*/}
                                                        {/*<div className="view-job-btn">{obj.node_duties}</div>*/}
                                                    {/*</span>*/}
                                                {/*</a>*/}
                                                {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                                                {/*<div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="quwu2w-accordion-label" aria-hidden="true" id="quwu2w-accordion" style="display: none;">*/}
                                                    {/*<div className="grid-x align-justify">*/}
                                                        {/*<div className="cell medium-8">*/}
                                                            {/*<div className="job-deties-req"><div className="job-duties">{obj.node_duties}</div>*/}
                                                                {/*<div className="job-req">{obj.node_requirements}</div>*/}
                                                            {/*</div>*/}
                                                            {/*<p>*/}
                                                                {/*{obj.node_work_hours}*/}
                                                            {/*</p>*/}
                                                        {/*</div>*/}
                                                        {/*<div className="cell medium-4">*/}
                                                            {/*<div className="location-block">*/}
                                                                {/*<h6>Job Sites</h6>*/}
                                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>*/}
                                                            {/*</div>*/}
                                                            {/*<div className="work-hour">*/}
                                                                {/*<h6>Job Sites</h6>*/}
                                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<p><button className="button">Apply Now</button></p>*/}
                                                {/*</div>*/}
                                            {/*</li>*/}
                                        {/*})}*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</section>*/}
                    {/*<!-- Main Banner Section Ends Here -->*/}
                    {/*<!-- left-image-right-content Section Starts Here -->*/}
                    {/*<section className="right-image-left-content top-100">*/}
                        {/*<div className="grid-container custom-grid custom-grid-right">*/}
                            {/*<div className="grid-x grid-padding-x height-750 pl-100 align-middle">*/}
                                {/*<div className="medium-6 cell small-order-change">*/}
                                    {/*<div className="pr-155">*/}
                                        {/*<h2 className="relative-title title-one">Our Services</h2>*/}
                                        {/*<h3 className="heading-content ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>*/}
                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="medium-6 cell no-padding">*/}
                                    {/*<div className="img-relative-title-ld">*/}
                                        {/*<div className="grid">*/}

                                            {/*<a className="grid__item" href="#">*/}
                                                {/*<div className="box">*/}
                                                    {/*<div className="box__shadow"></div>*/}
                                                    {/*<img className="box__img" src={award4} alt="Some image"/>*/}
                                                {/*</div>*/}
                                            {/*</a>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</section>*/}
                    {/*<!-- left-image-right-content Section Ends Here -->*/}
                </div>
        )
    }
}
export default About;
