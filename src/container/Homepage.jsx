
import React from 'react';
import WOW from 'wowjs';
import Parallax from 'parallax-js';
import GridOverLap from '../component/GridOverlap.jsx';
import layer1 from '../assets/img/layers/layer1.png';
import layer2 from '../assets/img/layers/layer2.png';
import layer3 from '../assets/img/layers/layer3.png';
import layer4 from '../assets/img/layers/layer4.png';
import layer5 from '../assets/img/layers/layer5.png';
import layer6 from '../assets/img/layers/layer6.png';
import layer7 from '../assets/img/layers/layer7.png';
import arrowImg from '../assets/img/logo/arrow.jpg';
import layerImg from '../assets/img/layertop.png';
import {jsonMiddleware, apiUrl, decodeUri} from '../services/common';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars

import requestService from '../services/request.js';
import $ from 'jquery';
const ArrowStyle = {background: `url(${arrowImg}) noRepeat center bottom`, backgroundSize: '1000px'}

//import 'foundation/js/vendor/zepto';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            HomeData: {},
            loading: true

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
        requestService.getService('/homepage-data/50')
            .then((response) => {
                let ids = ['node_flip_id','content_flip_id', 'content_slider_id', ];
                this.setState({loading: false});
                this.setState({HomeData: jsonMiddleware(response.data, ids)},()=> {
                    if(Object.keys(this.state.HomeData).length>0){
                        this.animation();
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
        $("#service-tabs li a").on('click', function(e) {
            e.preventDefault()
            let page = $(this).data('page');
            $(`#pages .page:not('.hide')`).stop().fadeOut('fast', function() {
                $(this).addClass('hide');
                $(`#pages .page[data-page=${page}]`).fadeIn('slow').removeClass('hide');

            });
        });
    }

    render(){
        console.log('Object.keys(this.state.HomeData).length', Object.keys(this.state.HomeData).length)
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
            <div>
           < section className="main-banner">
           <div className="grid-container">
           <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
           <div className="medium-4 small-12 cell wow fadeInUp">
           <h3 className="banner-info"><span>{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_title}</span><br/>
               {ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_subtitle_title)}<br/>
           </h3>
               <h6>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_description)}</h6>
               <p>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_body)}</p>
               {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_cta_button_title !==''? <button className="button">{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].node_cta_button_title}</button>:''}
           <div className="banner-img-link paroller-example">
           <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover hide-for-small-only">
               {this.state.HomeData.hasOwnProperty('node_flip_id')? this.state.HomeData['node_flip_id'][0].map((data, index) => {
                   return <div className="cell shrink wow fadeInDown" data-wow-delay={`${index}s`} ><a href="#"><img src={apiUrl+data.node_flipper_image} alt=""/></a></div>
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
            <div className="top-100 bottom-100 clearfix"></div>
           {this.state.HomeData.hasOwnProperty('content_slider_id')? <section className="tab-accordion bottom-100 mt-50-mobile">
                   <div className="grid-container custom-grid custom-grid-right">
                       <div className="grid-x">
                           <div className="medium-2 cell wow fadeInUp">
                               <ul className="accordion" data-responsive-accordion-tabs="accordion medium-tabs" id="service-tabs">
                                   {this.state.HomeData['content_slider_id'][0].map((obj, index) => {
                                   return <li className="tabs-title"><a data-page = {`panel${index}`} id = {index}>{ReactHtmlParser(obj.content_slider_title)}</a></li>
                                   })}
                               </ul>
                           </div>
                           <div className="medium-10 cell wow fadeInUp">
                               <div className="tabs-content" data-tabs-content="service-tabs">
                                   {this.state.HomeData['content_slider_id'][0].map((obj, index) => {
                                       return <div className={index === 0 ? "page" : "page hide"}
                                                        id={'panel' + index} data-page={'panel' + index}>
                                           <div className="grid-x grid-padding-x">
                                               <div className="medium-5 cell">
                                                   <div className="pr-100">
                                                       <h3>{ReactHtmlParser(obj.content_slider_description)}</h3>
                                                       <p className="ptb-40">{ReactHtmlParser(obj.content_slider_body)}</p>
                                                   </div>
                                                   {obj.content_slider_cta_title !==''? <button className="button">{ReactHtmlParser(obj.content_slider_cta_title)}</button>:''}
                                               </div>
                                               <div className="medium-7 cell no-padding  wow slideInRight">
                                                   <div className="img-relative-title-ld">
                                                       <h2 className="relative-title">{ReactHtmlParser(obj.right_image_block_title)}</h2>
                                                       <img src={decodeUri(apiUrl+obj.right_image_block_img)} alt=""/>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   })}
                               </div>
                           </div>

                       </div>
                   </div>
               </section>
               :''}

        <div className="clearfix"></div>

            <section className="left-image-right-content top-100 bottom-100">
               <div className="grid-container custom-grid custom-grid-left">
                   <div className="grid-x align-middle">
                       <div className="large-7 cell no-padding wow slideInLeft">
                           <div className="img-relative-title-ru">
                               <h2 className="relative-title">{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_title)}</h2>
                               <img src={apiUrl+this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_img} alt=""/>
                           </div>
                       </div>
                       <div className="large-5 cell wow fadeInUp">
                           <div className="content-inner pl-155">
                               <h3>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_flipper_title)}</h3>
                               {/*<h3>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_description)}</h3>*/}
                               {/*<p>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].image_content_block_body)}</p>*/}
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <div className="clearfix"></div>

        <section className="left-image-right-content paroller-example2" style={ArrowStyle}>
            <div className="grid-container custom-grid custom-grid-right">
                <div className="grid-x grid-padding-x height-750 align-middle pl-155">
                    <div className="medium-5 small-12 cell">
                        <h2 className="relative-title title-span">{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_title)}</h2>
                        <h3 className="ptb-40"> {ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_description)}</h3>
                        <p>{ReactHtmlParser(this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_body)}</p>
                        {this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_cta_title!==''? <button className="button">{this.state.HomeData[Object.keys(this.state.HomeData)[0]][0][0].content_bottom_cta_title}</button>:''}
                    </div>
                    <div className="medium-7 cell no-padding hide-for-small-only">
                        <div className="img-relative-title-ld">
                            <div className="grid">
                                <a className="grid__item" href="#preview-7">
                                    <div className="box">
                                        <div className="box__shadow"></div>
                                        <img className="box__img" src={apiUrl+layerImg} alt="Some image"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="clearfix top-100 bottom-100"></div>
        {/*<FooterRowSlider/>*/}
        </div> :''
        )
    }
}
export default Home;
