import React from 'react';
import BannerImg from '../assets/img/banner-with-content.jpeg';
import $ from 'jquery';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';

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
          caseStudy: []
      }
  }
    componentWillMount(){
        requestService.getService('/paragraph-data?_format=json')
            .then((response) => {
                this.setState({caseStudy: response.data[0]})
            })
            .catch((err) => {
                console.log(err);
            })
    }
  render(){
    return(
      <div>
      <section className="main-banner banner-with-content" style={BannerStyle(this.state.caseStudy.field_featured_image)}>
      <div className="grid-container">
        <div className="grid-x align-right align-middle grid-margin-x">
          <div className="medium-4 cell small-order-change">
            <h3 className="banner-info"><span>{this.state.caseStudy.title}</span><br/>
            </h3>
          </div>
          </div>
        </div>
    </section>
    <section className="main-banner bottom-100 top-100 banner-with-content-box">
      <div className="grid-container">
        <div className="grid-x align-right align-middle grid-margin-x">
            <div className="medium-5 cell small-order-change">
              <p>{$(this.state.caseStudy.field_body).text()}</p>
              <a href = {"/casestudy/article?nid="+this.state.caseStudy.nid} className="button">Read more</a>
            </div>
            <div className="medium-5 cell"></div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}

export default FeaturedContent;
