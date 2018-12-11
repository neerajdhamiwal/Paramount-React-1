
import React from 'react';
import MainBanner from '../component/MainBanner.jsx'
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars



//import 'foundation/js/vendor/zepto';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            awardsData: {},
            loading: true
        }
    }
    componentWillMount(){
        requestService.getService(`/reinforcement-data/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
                let ids = ['primary_image_id','secondary_image_id'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({loading: false});
                this.setState({awardsData: data});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render(){
        console.log(this.props.location.search.substring(this.props.location.search.indexOf("=")+1))
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

                { this.state.awardsData.hasOwnProperty('primary_image_id')?
           <div>
               {this.props.location.search.substring(this.props.location.search.indexOf("=")+1) == 33?<section className="our-certifications-box top-100 bottom-100">
                       <div className="grid-container">
                           <div className="grid-x align-right align-middle grid-margin-x our-certifications-bg">
                               <div className="medium-2 cell small-order-change">
                                   <div className="our-certifications-content">
                                       <h3 className="banner-info"><span>{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_title)}</span><br/>
                                           {ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].node_subtitle_title)}</h3>
                                   </div>
                               </div>
                               <div className="medium-8 cell">
                               </div>
                           </div>
                       </div>
                   </section>:<MainBanner node={this.state.awardsData.primary_image_id[0]}/>
               }

                {this.state.awardsData['primary_image_id'][0].map((obj) => {
                    return <section className="award-content-box top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-2 cell small-order-change">
                                    <img src={apiUrl+obj.primary_image_img}/>
                                </div>
                                <div className="medium-8 cell">
                                    <div className="award-content pr-155">
                                        <a href="#">{ReactHtmlParser(obj.primary_image_title)}</a>
                                        <h3>{ReactHtmlParser(obj.primary_image_description)}</h3>
                                        <p>{ReactHtmlParser(obj.primary_image_body)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })
                    }

        <section className="our-certifications-box top-100 bottom-100">
            <div className="grid-container">
                <div className="grid-x align-right align-middle grid-margin-x our-certifications-bg">
                    <div className="medium-2 cell small-order-change">
                        <div className="our-certifications-content">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].image_overlay_title)}</span><br/>
                                {ReactHtmlParser(this.state.awardsData.primary_image_id[0][0].image_overlay_sub_heading)}</h3>
                        </div>
                    </div>
                    <div className="medium-8 cell">

                    </div>
                </div>
            </div>
        </section>
           </div> :''}

                {this.state.awardsData.hasOwnProperty('secondary_image_id')?
                    this.state.awardsData['secondary_image_id'][0].map((obj) => {
                    return <section className="award-content-box top-100 bottom-100">
                        <div className="grid-container">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-2 cell small-order-change">
                                    <img src={apiUrl+obj.secondary_image_img}/>
                                </div>
                                <div className="medium-8 cell">
                                    <div className="award-content pr-155">
                                        <a href="#">{ReactHtmlParser(obj.secondary_image_title)}</a>
                                        <h3>{ReactHtmlParser(obj.secondary_image_description)}</h3>
                                        <p>{ReactHtmlParser(obj.secondary_image_body)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })
                :''}

            </div>
        )
    }
}
export default About;

