
import React from 'react';
import Parallax from 'parallax-js';
import award1 from '../assets/img/awards-02.png';
import award2 from '../assets/img/awards-03.png';
import award3 from '../assets/img/awards-04.png';
import award4 from '../assets/img/awards-05.png';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware, urlString, imgPath, getMeta, COUNT} from '../services/common.js';
import ShowMore from '../component/ShowMore.jsx';
import ReactHtmlParser from 'react-html-parser';
import WOW from 'wowjs';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import DocumentMeta from 'react-document-meta';
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
            meta: {}
        }
        this.animation = this.animation.bind(this);
        this.getMeValue = this.getMeValue.bind(this);

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

    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(urlString[this.props.location.pathname], this.getMeValue);
        requestService.getService(`/reinforcement-data/${urlString[this.props.location.pathname]}`)
            .then((response) => {
                let ids = ['primary_image_id','secondary_image_id', 'award_slider_id', 'certificate_slider_id', 'client_slider_id','partner_slider_id'];
                let data = jsonMiddleware(response.data, ids)
                // this.setState({});
                this.setState({awardsData: data,loading: false},()=> {
                    nid = urlString[this.props.location.pathname];
                    if(urlString[this.props.location.pathname] == 33){
                        this.animation()
                    }
                });
            })
            .catch((err) => {
                //console.log(err);
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
                <DocumentMeta {...this.state.meta}>

                {this.state.awardsData.hasOwnProperty('primary_image_id')?
           <div>
               {urlString[this.props.location.pathname] == 33?
                   <div>
                       <section className="bottom-100">
                           <div className="grid-container custom-grid custom-grid-right">
                               <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                                   <div className="medium-5 cell ptb-50-mobile">
                                       <h3 className="banner-info">{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_title)}<br/>
                                       <span>{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_subtitle_title)}</span></h3>
                                   </div>
                                   <div>
                                   <div className="medium-6 cell mb-50-mobile">
                                       <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
                                           <div data-depth="0.3"><img src={award1} alt="" /></div>
                                           <div data-depth="0.8"><img src={award2} alt="" /></div>
                                           <div data-depth="0.8"><img src={award3} alt="" /></div>
                                           <div data-depth="0.6"><img src={award4} alt="" /></div>
                                       </div>
                                   </div>
                                   </div>
                               </div>
                           </div>
                       </section>
                       <section className="our-certifications-box top-100 bottom-100">
                       <div className="grid-container">
                           <div className="grid-x align-right align-middle grid-margin-x our-certifications-bg">
                               <div className="medium-2 cell small-order-change">
                                   <div className="our-certifications-content">
                                       <h3 className="banner-info"><br/>
                                           Awards</h3>
                                       {/*<p>{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_description)}</p>*/}

                                   </div>
                               </div>
                               <div className="medium-8 cell">
                               </div>
                           </div>
                       </div>
                       </section>
                   </div>
                   : <section className="bottom-100">
                       <div className="grid-container custom-grid custom-grid-right">
                           <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                               <div className="medium-5 cell small-order-change">
                                   <h3 className="banner-info">{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_title)}<br/>
                                       <span> {ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_subtitle_title)}</span></h3>
                                       <ShowMore id={`awards${this.state.awardsData.primary_image_id[0][0].node_title}`} longText= {imgPath(this.state.awardsData.primary_image_id[0][0].node_description)}>
                                       </ShowMore>
                               </div>

                               <div>
                                 <div className="medium-6 cell">
                                     <div class="rotation-banner">
                                         <img id="loading" src={aboutLayerBannerone} alt="" />
                                         <img class="over-img" src={aboutLayerBannertwo} alt="" />
                                     </div>
                                 </div>
                               </div>

                           </div>
                       </div>
                   </section>
               }

                {this.state.awardsData['primary_image_id'][0].map((obj, i) => {
                    return <section className="award-content-box top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-2 small-4 cell">
                                    <img src={apiUrl+obj.primary_image_img}/>
                                </div>
                                <div className="medium-8 small-8 cell">
                                    <div className="award-content pr-155">
                                        <h4>{ReactHtmlParser(obj.primary_image_title)}</h4>
                                        {obj.primary_image_description !==''? <h3>{ReactHtmlParser(obj.primary_image_description)}</h3>:''}
                                        <ShowMore id={`awardsPrimaryImg${i}`} longText= {obj.primary_image_body}>
                                        </ShowMore>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })
                    }

               {this.state.awardsData.primary_image_id[0][0].image_overlay_title!==''? <section className="our-certifications-box top-100 bottom-100">
                       <div className="grid-container">
                           <div className="grid-x align-right align-middle grid-margin-x our-certifications-bg">
                               <div className="medium-2 cell small-order-change">
                                   <div className="our-certifications-content">
                                       <h3 className="banner-info">{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].image_overlay_title)}<br/>
                                           <span>{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].image_overlay_sub_heading)}</span></h3>
                                   </div>
                               </div>
                               <div className="medium-8 cell">

                               </div>
                           </div>
                       </div>
                   </section>:''}
           </div> :''}

                {this.state.awardsData.hasOwnProperty('secondary_image_id')?
                    this.state.awardsData['secondary_image_id'][0].map((obj, i) => {
                    return <section className="award-content-box top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-2 small-4 cell">
                                    <img src={apiUrl+obj.secondary_image_img}/>
                                </div>
                                <div className="medium-8 small-8 cell">
                                    <div className="award-content pr-155">
                                        <h4 href="#">{ReactHtmlParser(obj.secondary_image_title)}</h4>
                                        <h3>{ReactHtmlParser(obj.secondary_image_description)}</h3>
                                        <ShowMore id={`awardsScndryImg${i}`} longText= {obj.secondary_image_body}>
                                        </ShowMore>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })
                :''}
                {this.state.awardsData.hasOwnProperty('award_slider_id')?this.state.awardsData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}
                {this.state.awardsData.hasOwnProperty('certificate_slider_id')? this.state.awardsData['certificate_slider_id'][0][0].certificate_slider_id ? <CertSlider/>: '':''}
                    {this.state.awardsData.hasOwnProperty('partner_slider_id')? this.state.awardsData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':''}
                    {this.state.awardsData.hasOwnProperty('client_slider_id')? this.state.awardsData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}
                </DocumentMeta>
        )
    }
}
export default About;
