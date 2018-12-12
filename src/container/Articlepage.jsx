
import React from 'react';
import $ from 'jquery';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import GridList from '../component/GridList.jsx';


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
            loading: true

        }
    }
    componentWillMount(){
        let caseStudy = []
        requestService.getService(`/case-study-contents/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
            caseStudy =  response.data[0];
                this.setState({loading: false})
                this.setState({caseStudy: caseStudy});
            })
            .catch((err) => {
                console.log(err);
            })

        requestService.getService('/case-study-listing')
            .then((response) => {
                this.setState({caseList: response.data[0]});
            })
            .catch((err) => {
                console.log(err);
            })
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
                <div>
            <section className="main-banner banner-with-content article-banner" style={BannerStyle(this.state.caseStudy.field_hero_image)}>
         <div className="grid-container">
           <div className="grid-x align-right align-middle grid-margin-x">
             <div className="medium-10 cell small-order-change">
               <h3 className="banner-info"><span>{ReactHtmlParser(this.state.caseStudy.title)}</span><br/>
             </h3>
             </div>
           </div>
         </div>
       </section>
       <section className="left-image-right-content top-100 bottom-100">
         <div className="grid-container custom-grid custom-grid-right">
           <div className="grid-x grid-padding-x pl-155">
             <div className="medium-6 small-12 cell">
               <div className="pr-155 ">
                   {ReactHtmlParser(this.state.caseStudy.field_body)}
               </div>
           </div>
         <div className="medium-6 cell no-padding article-top-content hide-for-small-only">
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
              <div className="sidemnu-heading pl-155 pr-155 pb-50">
                <h3>{ReactHtmlParser(this.state.caseStudy.field_quote)}</h3>
                <p>{ReactHtmlParser(this.state.caseStudy.field_quote_author)}</p>
              </div>
              <div className="tabs-content" data-tabs-content="service-tabs">
                <div className="tabs-panel is-active" id="panel1">
                  <div className="grid-x grid-padding-x pl-155">
                  <div className="medium-6 cell">
                    <div className="pr-155 ">
                        <p>{ReactHtmlParser(this.state.caseStudy.field_secondary_body)}</p>

                    </div>
                </div>
                <div className="medium-6 small-12 cell no-padding article-top-content">
                  <div className="right-sidemenu">
                      {this.state.caseList.hasOwnProperty('name')?<ul>
                        {
                            this.state.caseList.name.split(',').map((value, index) => {
                            return <li><a href = {"/casestudy?cid="+this.state.caseList.id.split(',')[index]}>
                                {value}</a></li>
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
            </div>
        )
    }
}
export default ArticlePage;
