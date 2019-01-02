import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';
import TagLinks from '../component/TagLinks.jsx';
import GridList from '../component/GridList.jsx';
import requestService from '../services/request.js';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import DocumentMeta from 'react-document-meta';

let nid = [];

import $ from 'jquery';

class CaseStudy extends React.Component{
  constructor(){
    super()
      this.state = {
          activeCaseStudy: [],
          firstCaseStudy: [],
          featuredActive: {},
          loading: true,
          meta: {
              title: 'Blogs | Paramount Software Solutions ',
              description: 'Blogs that cover our point of view on various technical advancements happening around the world, and its impact in several industries and business overall.',
              canonical: 'http://paramountreact.opensenselabs.com/blog',
              meta: {
                  name: {
                      keywords: ''
                  }
              }
          }

      }
      this.caseStudyList = [];
      this.getTermInfo = this.getTermInfo.bind(this);
  }

  componentWillMount(){
      let CaseId = ''

      if(this.props.location && this.props.location.search){
          let uri = this.props.location.search.replace('%20','')
          CaseId =  uri.substring(uri.indexOf("=")+1)
      }

      requestService.getService('/blogs-listing-data')
        .then((response) => {
        this.caseStudyList =  response.data;
            nid = response.data[0].id.split(',');
        if(CaseId!==''){
            this.getTermInfo(parseInt(CaseId));
        }
        else{
            this.getTermInfo(nid[0]);
            localStorage.setItem('activeMenu', response.data[0].name.split(',')[0])

        }
      })
          .catch((err) => {
            console.log(err);
          })
  }

  getTermInfo(id){
    let uri = `/taxonomy/term-info-blogs/${id}`;
      requestService.getService(uri.replace(' ',''))
          .then((response) => {
              response.data.forEach((obj,i)=> {
                  if(obj.field_featured)
                  {
                      // this.setState({featuredActive: obj});
                      response.data.splice(i, 1);
                      // this.setState({loading: false});
                      this.setState({featuredActive: obj,loading: false, activeCaseStudy: response.data});
                      return false;
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
        this.state.loading? <center>
                <Loader
                    type="ThreeDots"
                    color="#fd302a"
                    height="100"
                    width="100"
                />
            </center> :
            <DocumentMeta {...this.state.meta}>
            <FeaturedContent activeCaseStudy={this.state.featuredActive}/>
                {this.props.locate === 'resource'?'':<TagLinks firstCaseStudy = {this.state.activeCaseStudy[0]} caseStudyList = {this.caseStudyList} getTermInfo={this.getTermInfo}/>}
      <div className=" bottom-100 clearfix"></div>
        {this.props.locate === 'resource'?'':<div><CaseStudylist activeCaseStudyData = {this.state.activeCaseStudy}/>
                <GridList/></div>}
            </DocumentMeta>
    )
  }
}

export default CaseStudy;
