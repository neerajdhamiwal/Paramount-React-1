
import React from 'react';
import Parallax from 'parallax-js';
import Map from '../component/Map.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import {customDivideData, apiUrl, jsonMiddleware, getMeta, imgPath} from '../services/common';
import requestService from '../services/request';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import contactBanner from '../assets/img/contact-banner.png';
import contactBanner2 from '../assets/img/contact-banner2.png';
import contactBanner3 from '../assets/img/contact-banner3.png';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';
import BottomFlipBanner from '../component/BottomFlipBanner';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars

class Team extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            teamData: {},
            loading: true,
            meta: {}
        }
        this.animation = this.animation.bind(this);
        this.getMeValue = this.getMeValue.bind(this);

    }
    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.nid, this.getMeValue);
        requestService.getService(`/reach-us-data/${this.props.nid}`)
            .then((response) => {
                let ids = ['map_id','award_slider_id', 'certificate_slider_id', 'team_member_id', 'content_ctaflip_id', 'node_flipper_id'];
                let data = jsonMiddleware(response.data, ids);
                // this.setState({loading: false});
                this.setState({teamData: data, loading: false}, ()=> {
                    this.animation();
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    animation(){
        let scene = document.getElementById('scene');
        new Parallax(scene);
    }

    render(){
        return(
            <DocumentMeta {...this.state.meta}>
                {this.state.loading ?
                    <center >
                        <Loader
                            type="ThreeDots"
                            color="#fd302a"
                            height="100"
                            width="100"
                        />
                        </center>: <div>
                        {Object.keys(this.state.teamData).length>0?
                       <div> <section className="main-banner award-banner">
                            <div className="grid-container">
                                <div className="grid-x align-right align-middle grid-margin-x">
                                    <div className="medium-5 cell small-order-change">
                                        <h3 className="banner-info">{ReactHtmlParser(this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_title)}<br/>
                                            <span>{ReactHtmlParser(this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_subtitle_title)}</span></h3>
                                        <p>{ReactHtmlParser(this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_description)}</p>
                                        {this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].hasOwnProperty('node_cta_button_title')? this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_cta_button_title !==''?<a className="button" href={apiUrl+this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_cta_button_url.substring(9)}>{this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_cta_button_title}</a>:'':''}
                                        {this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].hasOwnProperty('node_cta_button_title')?this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].download_link_title !==''?<a className="button" href={apiUrl+this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].download_link_url.substring(9)}>{this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].download_link_title}</a>:'':''}
                                    </div>
                                    <div className="medium-6 cell services-sub-menu-two">
                                            <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                                                        <div data-depth="0.3"><img src={contactBanner} alt="" /></div>
                                                        <div data-depth="0.8"><img src={contactBanner2} alt="" /></div>
                                                        <div data-depth="0.8"><img src={contactBanner3} alt="" /></div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </section>{this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_content_block!==''? <section className="text-centent">
                                <div className="grid-container ">
                            <div className="grid-x align-middle grid-margin-x">
                            <div className="medium-12 cell">
                            <h3 className="banner-info"><span></span></h3>
                            <p>{ReactHtmlParser(imgPath(this.state.teamData[Object.keys(this.state.teamData)[0]][0][0].node_content_block))}</p>
                            </div>
                            </div>
                            </div>
                       </section>:''}</div>:''}
                        {this.state.teamData.hasOwnProperty('team_member_id') ? <div className="grid-container pt-50">
                                {customDivideData(this.state.teamData['team_member_id'][0], 4).map((subArr, index) => {
                                    return <div key = {`arr${index}`}className="grid-x align-center block-latest-reads team-page">
                                        {subArr.map((obj, i) => {
                                            return    <div className="medium-3 cell img-block" key={i}>
                                                { //eslint-disable-next-line
                                                }<Link to={obj.social_link} target="_blank">
                                                <div className="img">
                                                    <img src={apiUrl+obj.team_member_image} alt=""/>
                                                    <span>{ReactHtmlParser(obj.about_team)}</span>
                                                </div>
                                                <div className="img-content">
                                                    <h6>{obj.team_member_name}</h6>{ //eslint-disable-next-line
                                                }<h2>{obj.team_member_job.replace(/\&amp;/g,'&')}</h2>
                                                </div>
                                                </Link>
                                            </div>
                                        })
                                        }
                                    </div>
                                })
                                }
                            </div> :""}
                        {this.state.teamData.hasOwnProperty('content_ctaflip_id')?<BottomFlipBanner nodeData={this.state.teamData['content_ctaflip_id'][0]}/>:''}
                        <div className="clear"></div>
                        {this.state.teamData.hasOwnProperty('map_id')? <Map node = {this.state.teamData['map_id'][0][0]}/>: ''}
                        {this.state.teamData.hasOwnProperty('award_slider_id')?this.state.teamData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}
                        {this.state.teamData.hasOwnProperty('certificate_slider_id')? this.state.teamData['certificate_slider_id'][0][0].certificate_slider_id ? <CertSlider/>: '':''}
                        {this.state.teamData.hasOwnProperty('partner_slider_id')? this.state.teamData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':''}
                        {this.state.teamData.hasOwnProperty('client_slider_id')? this.state.teamData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}

                    </div>}
            </DocumentMeta>
        )
    }
}
export default Team;
