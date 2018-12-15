import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import placeholderImg from '../assets/img/placeholder.png';
import Placeholder2 from '../assets/img/placeholder2.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';

import $ from 'jquery';
class TagLinks extends React.Component{

constructor(props){
  super(props)
    this.state = {
    name: [],
    activeObject:{}
    }
    this.clickHandler = this.clickHandler.bind(this);
}
    componentWillReceiveProps(nextProps){
        if(nextProps.caseStudyList !== 'undefined'){
            this.setState({name: nextProps.caseStudyList[0].name.split(',')})
        }
        if(nextProps.firstCaseStudy !=='undefined'){
          this.setState({activeObject: nextProps.firstCaseStudy})
        }
    }
    clickHandler(e){
      this.props.getTermInfo(this.props.caseStudyList[0].id.split(',')[e.target.id]);
    }
    render(){
        return(
          <section className="category-link left-image-right-content">
        <div className="grid-container  custom-grid custom-grid-right">
          <div className="grid-x">
            <div className="medium-2 cell">
              <ul className="vertical menu">
                  {this.state.name.map((value, index) => {
                      return <li onClick={this.clickHandler} ><a id={index}>
                          {value}</a></li>
                  })
                  }
              </ul>
            </div>
              {this.state.activeObject? <div className="medium-10 cell">
                    <div className="grid-x grid-padding-x">
                      <div className="medium-5 cell">
                        <h3></h3>
                        <p className="ptb-40">{ReactHtmlParser(this.state.activeObject['field_body'])}</p>
                          {this.props.locate === 'resource'?'':<a href = {"/casestudy/article?nid="+this.state.activeObject['id']} className="button">Read more</a>}
                      </div>
                      <div className="medium-7 cell no-padding">
                        <div className="img-relative-title-ld">
                          <h2 className="relative-title">{ReactHtmlParser(this.state.activeObject['title'])}</h2>
                          <img src={apiUrl+this.state.activeObject['image']} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>: ''}
          </div>
        </div>

      </section>
        )
    }
}
export default TagLinks;
