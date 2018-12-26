import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';
import TagLinks from '../component/TagLinks.jsx';
import GridList from '../component/GridList.jsx';
import requestService from '../services/request.js';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import ShowMore from 'react-show-more';


let nid = [];


import $ from 'jquery';

class CaseStudy extends React.Component{
  constructor(){
    super()
      this.state = {
          caseStudyList: [],
          activeCaseStudy: [],
          firstCaseStudy: [],
          featuredActive: {},
          loading: true

      }
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
    let uri = `/taxonomy/term-info-blogs/${id}`;
      requestService.getService(uri.replace(' ',''))
          .then((response) => {
              response.data.forEach((obj,i)=> {
                  if(obj.field_featured)
                  {
                      this.setState({featuredActive: obj});
                      response.data.splice(i, 1);
                      this.setState({loading: false});
                      this.setState({activeCaseStudy: response.data});
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
            <div>
      <FeaturedContent activeCaseStudy={this.state.featuredActive}/>
      <TagLinks firstCaseStudy = {this.state.activeCaseStudy[0]} caseStudyList = {this.state.caseStudyList} getTermInfo={this.getTermInfo}/>
      <div className=" bottom-100 clearfix"></div>
        {this.props.locate === 'resource'?'':<div><CaseStudylist activeCaseStudyData = {this.state.activeCaseStudy}/>
                <GridList/></div>}
      </div>
    )
  }
}

export default CaseStudy;
