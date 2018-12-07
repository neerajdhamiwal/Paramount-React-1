import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';
import TagLinks from '../component/TagLinks.jsx';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
let nid = [];


import $ from 'jquery';

class CaseStudy extends React.Component{
  constructor(){
    super()
      this.state = {
          caseStudyList: [],
          activeCaseStudy: [],
          firstCaseStudy: [],
          featuredActive: {}
      }
      this.getTermInfo = this.getTermInfo.bind(this);
  }
  componentWillMount(){
      let CaseId = ''
      if(this.props.location.search){
          let uri = this.props.location.search.replace('%20','')
          CaseId =  uri.substring(uri.indexOf("=")+1)
      }
      requestService.getService('/case-study-listing')
        .then((response) => {
        this.setState({caseStudyList: response.data})
            nid = response.data[0].id.split(',');
        if(CaseId!==''){

            this.getTermInfo(parseInt(CaseId));
        }
        else{
            this.getTermInfo(nid[0]);
        }
      })
          .catch((err) => {
            console.log(err);
          })
  }
  getTermInfo(id){
    let uri = `/taxonomy/term-info/${id}`;
      requestService.getService(uri.replace(' ',''))
          .then((response) => {
              this.setState({activeCaseStudy: response.data})
              response.data.forEach((obj)=> {
                  if(obj.field_featured)
                  {
                      this.setState({featuredActive: obj});
                  }
              })
          })
          .catch((err) => {
              console.log(err);
          })
  }
  componentDidMount(){
    //Foundation.addToJquery($);
    $(document).foundation();
  }
  render() {
    return(
      <div>
      <FeaturedContent activeCaseStudy={this.state.featuredActive}/>
      <TagLinks firstCaseStudy = {this.state.activeCaseStudy[1]} caseStudyList = {this.state.caseStudyList} getTermInfo={this.getTermInfo}/>
      <div className=" bottom-100 clearfix"></div>
        <CaseStudylist activeCaseStudyData = {this.state.activeCaseStudy}/>
      </div>
    )
  }
}

export default CaseStudy;
