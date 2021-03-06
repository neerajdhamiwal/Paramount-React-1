
import React from 'react';
import requestService from '../services/request.js';
import {apiUrl, imgPath, getMeta} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import GridList from '../component/GridList.jsx';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars
import $ from 'jquery';

const BannerStyle =(url)=> {
    let combinedurl = apiUrl+url
    return {
        backgroundImage: `url(${combinedurl})`
    }
};
//import 'foundation/js/vendor/zepto';
class ArticlePage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            caseStudy: [],
            caseList: {},
            loading: true,
            meta: {}
        }
        this.getMeValue = this.getMeValue.bind(this);
    }

    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.nid, this.getMeValue);
        let caseStudy = [];
        requestService.getService(`/blogs-contents/${this.props.nid}`)
            .then((response) => {
                if(response.data.length> 0){
                caseStudy =  response.data[0];
                this.setState({caseStudy: caseStudy, loading: false},()=> {
                    $('.addAttr a').prop('target', '_blank');
                });
                }
            })
            .catch((err) => {
                //console.log(err);
            })

        requestService.getService('/blogs-listing-data')
            .then((response) => {
                this.setState({caseList: response.data[0]});
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
                    <section className="main-banner banner-with-content article-banner" style={BannerStyle(this.state.caseStudy.field_hero_image)}>
         <div className="grid-container">
           <div className="grid-x align-right align-middle grid-margin-x">
             <div className="medium-10 cell small-order-change">
               <h3 className="banner-info">{ReactHtmlParser(this.state.caseStudy.title)}<br/>
                   <span>{ReactHtmlParser(this.state.caseStudy.node_subtitle_title)}</span>
             </h3>
             </div>
           </div>
         </div>
       </section>
       <section className="top-100 bottom-100 addAttr">
         <div className="grid-container custom-grid custom-grid-right">
           <div className="grid-x grid-padding-x">
             <div className="medium-6 small-12 cell p-right-45">
                   <p>{ReactHtmlParser(imgPath(this.state.caseStudy.field_body))}</p>
           </div>
         <div className="medium-6 cell article-top-content hide-for-small-only">
           <div className="img-relative-title-ld">
             <img src={apiUrl+this.state.caseStudy.field_secondary_image} className="" alt=""/>
           </div>
         </div>
       </div>
             </div>
       </section>
       <section className="tab-accordion top-100 bottom-100 content-with-sidemenu">
          <div className="grid-container  custom-grid custom-grid-right">
            <div className="grid-x">
            <div className="medium-12 cell">
                {(this.state.caseStudy.field_quote !=='' || this.state.caseStudy.field_quote_author) ?<div className="sidemnu-heading pl-155 pr-155 pb-50">
                        {this.state.caseStudy.field_quote!==''?<h3>{ReactHtmlParser(this.state.caseStudy.field_quote)}</h3>:''}
                    {this.state.caseStudy.field_quote_author !==''?<p>{ReactHtmlParser(this.state.caseStudy.field_quote_author)}</p>:''}
              </div>:''}
              <div className="tabs-content" data-tabs-content="service-tabs">
                <div className="tabs-panel is-active" id="panel1">
                  <div className="grid-x grid-padding-x">
                  <div className="medium-8 cell addAttr">
                    <div className="">
                        <p>{ReactHtmlParser(imgPath(this.state.caseStudy.field_secondary_body))}</p>

                    </div>
                </div>
                <div className="medium-4 small-12 cell no-padding article-top-content">
                  <div className="right-sidemenu">
                      {this.state.caseList.hasOwnProperty('name')?<ul>
                        {
                            this.state.caseList.name.split(',').map((value, index) => {
                            return <li key={index} onClick={() => localStorage.setItem('activeMenu', this.state.caseList.name.split(',')[index])}><Link to = {"/resources/blogs?cid="+this.state.caseList.id.split(',')[index]} id={index} className={localStorage.getItem('activeMenu')? value === localStorage.getItem('activeMenu')?'activeTab':'': index===0?'activeTab':''}>
                                {value}</Link></li>
                        })
                        }
                    </ul>:''
                          }
                  </div>
                <div className="img-relative-title-ld hide-for-small-only">
                  <h2 className="relative-title">Article</h2>
                </div>
                </div>
              </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        <GridList/>
                </DocumentMeta>
        )
    }
}
export default ArticlePage;
