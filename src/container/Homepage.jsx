
import React from 'react';
import WOW from 'wowjs';
import Parallax from 'parallax-js';
import GridOverLap from '../component/GridOverlap.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import GridList from '../component/GridList.jsx';
import layer1 from '../assets/img/layers/layer1.png';
import layer2 from '../assets/img/layers/layer2.png';
import layer3 from '../assets/img/layers/layer3.png';
import layer4 from '../assets/img/layers/layer4.png';
import layer5 from '../assets/img/layers/layer5.png';
import layer6 from '../assets/img/layers/layer6.png';
import layer7 from '../assets/img/layers/layer7.png';
import arrowImg from '../assets/img/logo/arrow.jpg';
import layerImg from '../assets/img/paramount-edge.png';
import {jsonMiddleware, apiUrl, decodeUri, imgPath, getMeta} from '../services/common';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import ShowMore from '../component/ShowMore.jsx';
import DocumentMeta from 'react-document-meta';
import requestService from '../services/request.js';
import $ from 'jquery';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars

const ArrowStyle = {background: `url(${arrowImg}) noRepeat center bottom`, backgroundSize: '1000px'}
//import 'foundation/js/vendor/zepto';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            HomeData: {},
            loading: true,
            meta: {},
            update: true

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
        new Parallax(scene);
        $("#service-tabs li a").on('click', function(e) {
            e.preventDefault()
            let page = $(this).data('page');
            $(`#pages .page:not('.hide')`).stop().fadeOut('fast', function() {
                $(this).addClass('hide');
                $(`#pages .page[data-page=${page}]`).fadeIn('slow').removeClass('hide');
            });
        });
        $('#service-tabs').on('click', 'li', function() {
            $('#service-tabs li.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }

    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.nid, this.getMeValue);
        requestService.getService(`/homepage-data/${this.props.nid}`)
            .then((response) => {
                let ids = ['node_flip_id','content_flip_id', 'content_slider_id', 'award_slider_id', 'certificate_slider_id', 'partner_slider_id', 'client_slider_id'];
                // this.setState({});
                // this.setState({meta: meta})
                this.setState({HomeData: jsonMiddleware(response.data, ids), loading: false},()=> {
                    if(Object.keys(this.state.HomeData).length>0){
                        this.animation();
                    }
                });
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
        Object.keys(this.state.HomeData).length >0 ?
            <DocumentMeta {...this.state.meta}>
            <section className="main-banner">
           <div className="grid-container">
           <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
           <div className="medium-4 small-12 cell wow fadeInUp">
               <h3 className="banner-info"><span>{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_title}</span><br/>
               <span>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_subtitle_title)}</span><br/>
           </h3>
               {ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_description)}
               {ReactHtmlParser(imgPath(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_body))}

               {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_cta_button_title !==''? <Link className="button" to={this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_cta_button_url.substring(9)}>{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_cta_button_title}</Link>:''}
           <div className="banner-img-link paroller-example">
           <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
               {this.state.HomeData.hasOwnProperty('node_flip_id')? this.state.HomeData['node_flip_id'][0].map((data, index) => {
                   return <div key = {index} className="cell shrink wow fadeInDown banner-image-effect" data-wow-delay='1s' ><Link to={data.node_flipper_cta_url.substring(9)}><img src={apiUrl+data.node_flipper_image} alt=""/><span>{data.node_flipper_title}</span></Link></div>
                   }):''}
           </div>
           </div>
           </div>
           <div className="medium-6 cell smal-12">
           <div className="medium-6 cell">
           <div id="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
           <div data-depth="0.3"><img src={layer7} alt="" /></div>
           <div data-depth="0.8"><img src={layer6} alt="" /></div>
           <div data-depth="0.8"><img src={layer5} alt="" /></div>
           <div data-depth="0.6"><img src={layer4} alt="" /></div>
           <div data-depth="0.2"><img src={layer3} alt="" /></div>
           <div data-depth="0.4"><img src={layer2} alt="" /></div>
           <div data-depth="0.2"><img src={layer1} alt="" /></div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </section>

        <div className="top-100 clearfix"></div>
           {this.state.HomeData.hasOwnProperty('content_flip_id')? <GridOverLap data = {this.state.HomeData['content_flip_id'][0]}/>:''}
            <div className="top-100 clearfix"></div>
           {this.state.HomeData.hasOwnProperty('content_slider_id')? <section className="tab-accordion">
                   <div className="grid-container custom-grid custom-grid-right">
                       <div className="grid-x">
                           <div className="medium-2 cell wow fadeInUp">
                               <ul className="accordion" data-responsive-accordion-tabs="accordion medium-tabs" id="service-tabs">
                                   {this.state.HomeData['content_slider_id'][0].map((obj, index) => { //eslint-disable-next-line
                                   return <li key = {index} className={`${index===0 ?'tabs-title activeTab':'tabs-title'}`} onClick={() => this.setState({update: `contentSlider${index}`})}><a data-page = {`panel${index}`} id = {index}>{ReactHtmlParser(obj.content_slider_title)}</a></li>
                                   })}
                               </ul>
                           </div>
                           <div className="medium-5 cell wow fadeInUp" id="pages">
                               <div className="tabs-content" data-tabs-content="service-tabs">
                                   {this.state.HomeData['content_slider_id'][0].map((obj, index) => {
                                       return <div  key = {index} className={index === 0 ? "page" : "page hide"}
                                                        id={'panel' + index} data-page={'panel' + index}>
                                           <div className="grid-x grid-padding-x tab-accordion-content">
                                               <div className="medium-12 cell">
                                                   <div>
                                                       <h3>{ReactHtmlParser(obj.content_slider_description)}</h3>
                                                       <ShowMore id={`contentSlider${index}`} longText= {obj.content_slider_body}  update={this.state.update}>
                                                       </ShowMore>
                                                   </div>
                                                   {obj.content_slider_cta_title !==''? <Link className="button mt-15" to={obj.content_slider_cta_url.substring(9)}>{ReactHtmlParser(obj.content_slider_cta_title)}</Link>:''}
                                               </div>
                                           </div>
                                       </div>
                                   })}
                               </div>
                           </div>
                           <div className="medium-5 cell no-padding  wow slideInRight">
                               <div className="img-relative-title-ld">
                                   <img src={decodeUri(apiUrl+this.state.HomeData['content_slider_id'][0][0].right_image_block_img)} alt=""/>
                                   <h2 className="relative-title">{ReactHtmlParser(this.state.HomeData['content_slider_id'][0][0].right_image_block_title)}</h2>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               :''}

        <div className="clearfix"></div>
            <section className="left-image-right-content">
               <div className="grid-container custom-grid custom-grid-left">
                   <div className="grid-x align-middle">
                       <div className="small-12 medium-6 cell no-padding wow slideInLeft">
                           <div className="img-relative-title-ru">
                               <h2 className="relative-title">{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_title)}</h2>
                               <div className="left-image-block"><img src={apiUrl+this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_img} alt=""/></div>
                           </div>
                       </div>
                       <div className="small-12 medium-6 cell wow fadeInUp">
                           <div className="content-inner pl-155">
                               <ShowMore id="imgConBlock" longText= {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_body}>
                               </ShowMore>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <div className="clearfix"></div>

        <section className="paroller-example2 pb-50" style={ArrowStyle}>
            <div className="grid-container custom-grid custom-grid-right">
                <div className="grid-x grid-padding-x  align-middle pl-155">
                    <div className="medium-6 small-12 cell  p-right-45">
                        <h2 className="relative-title title-span">{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_title)}</h2>
                        {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_description !==''? <h3 className="ptb-40"> {ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_description)}</h3>:''}
                        <ShowMore id="imgLConBlock" longText= {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_body}>
                        </ShowMore>
                        {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_cta_title!==''? <Link className="button mt-15" to={this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_cta_url.substring(9)}>{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_cta_title}</Link>:''}
                    </div>
                    <div className="medium-6 cell no-padding hide-for-small-only">
                        <div className="img-relative-title-ld">
                            <div className="grid">
                                <div className="grid__item">
                                    <div className="box">
                                        <div className="box__shadow"></div>
                                        <img className="box__img" src={layerImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<HorizontalScroll/>*/}
                <GridList/>
        {/*<FooterRowSlider/>*/}
                {this.state.HomeData.hasOwnProperty('award_slider_id')?this.state.HomeData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}
                {this.state.HomeData.hasOwnProperty('certificate_slider_id')? this.state.HomeData['certificate_slider_id'][0][0].certificate_slider_id ? <CertSlider/>: '':''}
                {this.state.HomeData.hasOwnProperty('partner_slider_id')? this.state.HomeData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':''}
                {this.state.HomeData.hasOwnProperty('client_slider_id')? this.state.HomeData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}
            </DocumentMeta> :''
        )
    }
}
export default Home;
