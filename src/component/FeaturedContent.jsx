import React from 'react';
import BannerImg from '../assets/img/banner-with-content.jpeg';
import $ from 'jquery';
import requestService from '../services/request.js';
import {apiUrl, imgPath} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';


const BannerStyle =(url)=> {
    let combinedurl = apiUrl+url
    return {
        backgroundImage: `url(${combinedurl})`
    }
};

class FeaturedContent extends React.Component{
  constructor(props){
    super(props)
      this.state = {
          activeCaseStudy: []
      }
  }
    componentWillReceiveProps(nextProps){
        if(nextProps.activeCaseStudy !== 'undefined'){
            this.setState({activeCaseStudy: nextProps.activeCaseStudy})
        }
    }

  render(){
    return(
      <div>
          {this.state.activeCaseStudy? <section className="main-banner banner-with-content" style={BannerStyle(this.state.activeCaseStudy.image)}>
                  <div className="grid-container">
                      <div className="grid-x align-right align-middle grid-margin-x">
                          <div className="medium-4 cell small-order-change">
                              <h3 className="banner-info"><span>{ReactHtmlParser(this.state.activeCaseStudy.title)}</span><br/><p>{ReactHtmlParser(this.state.activeCaseStudy.sub_title)}</p>
                              </h3>
                          </div>
                      </div>
                  </div>
              </section>: ''}
          {this.state.activeCaseStudy? <section className="main-banner bottom-100 top-100 banner-with-content-box">
                  <div className="grid-container">
                      <div className="grid-x align-right align-middle grid-margin-x">
                          <div className="medium-5 cell small-order-change">
                              <p>{ReactHtmlParser(imgPath(this.state.activeCaseStudy.field_body))}</p>
                              {this.props.locate === 'resource'?'':<a href = {"/casestudy/article?nid="+this.state.activeCaseStudy.id} className="button">Read more</a>}
                          </div>
                          <div className="medium-5 cell"></div>
                      </div>
                  </div>
              </section>: ''}
    </div>
    )
  }
}

export default FeaturedContent;
