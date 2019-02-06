import React from 'react';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';

// const BannerStyle =(url)=> {
//     let combinedurl = apiUrl+url
//     return {
//         backgroundImage: `url(${combinedurl})`
//     }
// };

class FeaturedContent extends React.Component{
  render(){
    return(
      <div>
          {this.props.activeCaseStudy? <section className="main-banner banner-with-content" style={{backgroundImage:`url(${apiUrl+this.props.activeCaseStudy.image})`}}>
              <div className="grid-container">
                  <div className="grid-x align-right align-middle grid-margin-x">
                      <div className="small-12 medium-4 cell small-order-change dsfsd">
                        <h3 className="banner-info">{ReactHtmlParser(this.props.activeCaseStudy.title)}<br/><span>{ReactHtmlParser(this.props.activeCaseStudy.sub_title)}</span>
                          </h3>
                      </div>
                  </div>
              </div>
              </section>: ''}
          {this.props.activeCaseStudy? <section className="main-banner bottom-100 top-100 banner-with-content-box">
                  <div className="grid-container">
                      <div className="grid-x align-right align-middle grid-margin-x">
                          <div className="small-12 medium-5 cell small-order-change">
                              <ShowMore id={`FeatBlog`} longText= {ReactHtmlParser(this.props.activeCaseStudy.field_body)}>
                              </ShowMore>
                              {this.props.locate === 'resource'?'':<a href = {this.props.activeCaseStudy.read_more_url} className="button">Read more</a>}
                          </div>
                          <div className="small-12 medium-5 cell"></div>
                      </div>
                  </div>
              </section>: ''}
    </div>
    )
  }
}

export default FeaturedContent;
