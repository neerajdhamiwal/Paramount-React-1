
import React from 'react';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import aboutLayerBannerone from '../assets/img/about-layer1.png';
import aboutLayerBannertwo from '../assets/img/about-layer2.png';
import ShowMore from '../component/ShowMore.jsx';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars

//import 'foundation/js/vendor/zepto';
class Resource extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true,
            listingData:[],
            bannerData:[],
            meta: {
                title: 'Info Graphics| Paramount Software Solutions  ',
                description: '',
                canonical: '',
                meta: {
                    name: {
                        keywords: ''
                    }
                }
            }
        }
        this.getRequest = this.getRequest.bind(this);
    }

    getRequest(){
        requestService.getService('/banner-block-infographic')
            .then((response) => {
                this.setState({bannerData:response.data})
            })
            .catch((err) => {
                console.log(err);
            });
        requestService.getService('/listing-infrographics')
            .then((response) => {
                let ids = ['nid'];
                let data = jsonMiddleware(response.data, ids);
                // this.setState({loading: false});
                this.setState({listingData: data, loading: false})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentWillMount(){
        this.getRequest();
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
                    <div>
                    { this.state.bannerData.length>0?
                        <div>
                            <section className="bottom-100">
                                <div className="grid-container custom-grid custom-grid-right">
                                    <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
                                        <div className="medium-5 cell small-order-change">
                                            <h3 className="banner-info">{ReactHtmlParser(this.state.bannerData[0].banner_title)}<br/>
                                                <span>{ReactHtmlParser(this.state.bannerData[0].banner_subtitle)}</span></h3>
                                            <h5>{ReactHtmlParser(this.state.bannerData[0].banner_description)}</h5>
                                            <ShowMore id={`info${this.state.bannerData[0].banner_title}`} longText= {this.state.bannerData[0].banner_body}>
                                            </ShowMore>
                                        </div>
                                        <div>
                                          <div className="medium-6 cell">
                                              <div className="rotation-banner">
                                                  <img id="loading" src={aboutLayerBannerone} alt="" />
                                                  <img className="over-img" src={aboutLayerBannertwo} alt="" />
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {this.state.listingData.hasOwnProperty('nid')?this.state.listingData['nid'][0].map((obj, i) => {
                                return <section key= {i} className="award-content-box top-100 bottom-100">
                                    <div className="grid-container">
                                        <div className="grid-x align-right align-middle grid-margin-x">
                                            <div className="medium-2 cell small-order-change">
                                                <img src={apiUrl + obj.hero_image} alt=""/>
                                            </div>
                                            <div className="medium-8 cell">
                                                <div className="award-content pr-155">
                                                    { //eslint-disable-next-line
                                                         }<a>{ReactHtmlParser(obj.title)}</a>
                                                    <h3>{ReactHtmlParser(obj.node_subtitle_title)}</h3>
                                                    <ShowMore id={`info${obj.nid}`} longText= {obj.node_body}>
                                                    </ShowMore>
                                                    { //eslint-disable-next-line
                                                    }<Link to={obj.read_more_url}>View</Link>
                                                    {//eslint-disable-next-line
                                                         obj.cta_button_title!==''?<a href="" className="button">{obj.cta_button_title}</a>:''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            }):''
                            }
                        </div> :''}
                        </div>
                </DocumentMeta>
        )
    }
}
export default Resource;
