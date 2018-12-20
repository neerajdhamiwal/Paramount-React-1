
import React from 'react';
import articleBanner from '../assets/img/article-banner.jpeg';
import $ from 'jquery';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import GridListScnd from '../component/GridListScnd.jsx';
import CaseStudy from '../component/CaseStudy.jsx';
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware, imgPath} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';


//import 'foundation/js/vendor/zepto';
const BannerStyle =(url)=> {
    let combinedurl = apiUrl+url
    return {
        backgroundImage: `url(${combinedurl})`
    }
};
class Resource extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true,
            infoData:[],
            bannerData:[],
            meta: {}
        }
        this.getRequest = this.getRequest.bind(this);
    }
    getRequest(){
        let caseData = [];
        requestService.getService(`/infographic-node/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
                this.setState({loading: false});
                this.setState({infoData: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.location.search.substring(this.props.location.search.indexOf("=")+1), this.getMeValue);
        this.getRequest();
    }
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
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
                this.state.infoData.length>0? <DocumentMeta {...this.state.meta}>

                <section className="main-banner banner-with-content article-banner bottom-100" style={BannerStyle(this.state.infoData[0].hero_image)}>
                        <div className="grid-container">
                            <div className="grid-x align-right align-middle grid-margin-x">
                                <div className="medium-10 cell small-order-change">
                                    <h3 className="banner-info"><span>{this.state.infoData[0].node_title}</span><br/>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                <div className="grid-container">
                    <div className="grid-x grid-margin-x align-center">
                        <div className="cell medium-10">
                                <div className="block">
                                    <h3 className="banner-info"><span>{ReactHtmlParser(this.state.infoData[0].node_title)}</span><br/>{ReactHtmlParser(this.state.infoData[0].node_subtitle_title)}</h3>
                                    <p>{ReactHtmlParser(imgPath(this.state.infoData[0].node_body))}</p>
                                    <div className="img txt-center">
                                        <img src={apiUrl+this.state.infoData[0].secondary_img}/>
                                    </div>
                                    {this.state.infoData[0].cta_button_title !==''?<div className="bottom">
                                        <a className="button" href="#">{this.state.infoData[0].cta_button_title}</a>
                                        </div>:''}
                                    <div className="upload-botton">
                                        {this.state.infoData[0].attach_file_title!==''? <div>
                                                <label for="exampleFileUpload" className="button">{this.state.infoData[0].attach_file_title}</label>
                                                <input type="file" id="exampleFileUpload" className="show-for-sr"/></div>:''}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                    </DocumentMeta>:''
        )
    }
}
export default Resource;
