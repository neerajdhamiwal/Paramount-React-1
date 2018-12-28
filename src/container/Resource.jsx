
import React from 'react';
import $ from 'jquery';
import GridListScnd from '../component/GridListScnd.jsx';
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware, imgPath, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from '../component/ShowMore.jsx';

//import 'foundation/js/vendor/zepto';
class Resource extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true,
            caseData:[],
            blogData:[],
            infoData:[],
        }
        this.getRequest = this.getRequest.bind(this);
    }
    getRequest(){
        let caseData = [];
        requestService.getService('/latest-case-study-data')
            .then((response) => {
                let ids = ['id'];
                let data = jsonMiddleware(response.data, ids);
                this.setState({caseData:data})
            })
            .catch((err) => {
                console.log(err);
            });
        requestService.getService('/latest-blogs-data')
            .then((response) => {
                let ids = ['nid'];
                let data = jsonMiddleware(response.data, ids);
                this.setState({blogData: data})
            })
            .catch((err) => {
                console.log(err);
            });
        requestService.getService('/feature-infographic')
            .then((response) => {
                this.setState({loading: false});
                this.setState({infoData: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentWillMount(){
        this.getRequest();
    }
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }

    render(){
        return(
            <div>
                <div className="top-100 resource-page-grid">
                    {this.state.blogData.hasOwnProperty('nid')?<GridListScnd data={this.state.blogData['nid'][0]} node="blog"/>:''}
                    {this.state.caseData.hasOwnProperty('id')?<GridListScnd data={this.state.caseData['id'][0]} node="case"/>:''}
                    {this.state.infoData.length>0? <section className="info-graphic pt-50 pb-50 top-100 bottom-100 grey-bg">
                        <div className="grid-container">
                            <div className="grid-x">
                                <div className="info-graphic-heading small-12"><h3>Info<span>graphics</span></h3></div>
                                <div className="small-12 medium-7">
                                    <div className="resource-big-charge">
                                        <img src={apiUrl+this.state.infoData[0].infographic_hero_image}/>
                                    </div>
                                </div>
                                <div className="small-12 medium-5">
                                    <div className="info-graphi-small"><img src={apiUrl+this.state.infoData[0].infographic_sec_image}/></div>
                                        <div className="info-graphic-details">
                                            <h3>{ReactHtmlParser(this.state.infoData[0].infographic_title)}</h3>
                                            {this.state.infoData[0].infographic_subtitle? <h6>{this.state.infoData[0].infographic_subtitle}</h6>:''}
                                            <ShowMore id="resource" longText= {this.state.infoData[0].infographic_body}>
                                            </ShowMore>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>:''}
                </div>
            </div>
        )
    }
}
export default Resource;
