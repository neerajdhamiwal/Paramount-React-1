
import React from 'react';
import Parallax from 'parallax-js';
import BottomFlipBanner from '../component/BottomFlipBanner.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware, getMeta} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import careerBanner from '../assets/img/career-banner.png';
import careerBanner2 from '../assets/img/career-banner2.png';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import $ from 'jquery';
import DocumentMeta from 'react-document-meta';
import JobComponent from  '../component/Jobcomponent.jsx';

class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            awardsData: {},
            loading: true,
            careerData:[],
            bannerData:[],
            duty: true,
            jobList: [],
            meta: {}
        }
        this.animation = this.animation.bind(this);
        this.change = this.change.bind(this);
        this.getAllJobs = this.getAllJobs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getMeValue = this.getMeValue.bind(this);

    }

    animation(){
            let scene = document.getElementById('scene');
            new Parallax(scene);
        $('#jobList').on('click', 'li a', function() {
            $('#jobList a.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
            }

    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.nid, this.getMeValue);
        requestService.getService(`/reach-us-data/${this.props.nid}`)
            .then((response) => {
                let ids = ['content_ctaflip_id', 'node_flipper_id']
                let data = jsonMiddleware(response.data, ids)
                // this.setState({loading: false});
                this.setState({bannerData: data, loading: false},()=>{
                    this.animation();
                });
            })
            .catch((err) => {
                //console.log(err);
            })

        requestService.getService(`/job-data`)
            .then((response) => {
                this.setState({jobList: response.data});
            })
            .catch((err) => {
                //console.log(err);
            })
        this.getAllJobs('not');
    }
    getAllJobs(flag){
        requestService.getService(`/career-all-data`)
            .then((response) => {
                let ids = ['job_id','nid'];
                let data = jsonMiddleware(response.data, ids);
                this.setState({careerData: data},()=> {
                });
            })
            .catch((err) => {
                //console.log(err);
            })
    }

    requestJob(id){
        requestService.getService(`/career-type-data/${id}`)
            .then((response) => {
                let ids = ['job_id','nid'];
                let data = jsonMiddleware(response.data, ids);
                //this.setState({loading: false});
                this.setState({careerData: data},()=> {
                    // $(document).foundation();
                });
            })
            .catch((err) => {
                //console.log(err);
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
        if(e.target.id==='allJob'){
            this.getAllJobs('NotReinitialize')
        }
        else{
            this.requestJob(e.target.id);
        }
    }

    render(){
        return(
            this.state.loading? <center>
                    <Loader
                        type="ThreeDots"
                        color="#fd302a"
                        height="100"
                        width="100"
                    />
                </center> :
                <DocumentMeta {...this.state.meta}>
                    {Object.keys(this.state.bannerData).length>0?
                        <section className="main-banner award-banner">
                            <div className="grid-container">
                        <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                            <h3 className="banner-info">{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_title)}<br/><span>{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_subtitle_title)}</span></h3>
                        <p>{ReactHtmlParser(this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_description)}</p>
                        {this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].hasOwnProperty('node_cta_button_title')? this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_title !==''?<a className="button mt-15" href={apiUrl+this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_url.substring(9)}>{this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].node_cta_button_title}</a>:'':''}
                        {this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].hasOwnProperty('node_cta_button_title')?this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_title !==''?<a className="button mt-15" href={apiUrl+this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_url.substring(9)}>{this.state.bannerData[Object.keys(this.state.bannerData)[0]][0][0].download_link_title}</a>:'':''}
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
                    <section className="job-posting-list top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="medium-2 cell">
                                    <ul className="vertical menu career-page-tab-menu" id="jobList">
                                        <li>{ //eslint-disable-next-line
                                        }<a onClick={this.change} id="allJob" className="activeTab">All</a></li>
                                        {this.state.jobList.length>0 ? this.state.jobList.map((obj, i)=>{
                                            return <li key={i}>{ //eslint-disable-next-line
                                            }<a onClick={this.change} id={obj.job_id}>{obj.job_name}</a></li>
                                        }) : <div></div>}
                                    </ul>
                                </div>
                                <div className="medium-10 cell">
                                    {this.state.loading?
                                        <Loader
                                            type="ThreeDots"
                                            color="#fd302a"
                                            height="100"
                                            width="100"
                                        />:this.state.careerData.hasOwnProperty('nid')?<JobComponent careerData={this.state.careerData} duty={this.state.duty}/>:''}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- Main Banner Section Ends Here -->*/}
                    {/*<!-- left-image-right-content Section Starts Here -->*/}
                    {this.state.bannerData.hasOwnProperty('content_ctaflip_id')?<BottomFlipBanner nodeData={this.state.bannerData['content_ctaflip_id'][0]}/>:''}                    {/*<!-- left-image-right-content Section Ends Here -->*/}
                </DocumentMeta>
        )
    }
}
export default About;
