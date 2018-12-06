import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';

import $ from 'jquery';

class CaseStudy extends React.Component{
  constructor(){
    super()
      this.state = {
          caseStudyList: [],
          activeCaseStudy: []
      }
  }
  componentWillMount(){
      requestService.getService('/case-study-listing')
        .then((response) => {
        this.setState({caseStudyList: response.data})
            let Ids = [];
            Ids = response.data[0].id.split(',');
            requestService.getService('/taxonomy/term-info/'+Ids[0])
                .then((response) => {
                  this.setState({activeCaseStudy: response.data})
                })
                .catch((err) => {
                    console.log(err);
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
      <FeaturedContent activeCaseStudy={this.state.activeCaseStudy[0]}/>
      <CaseStudylist caseStudyList = {this.state.caseStudyList} activeCaseStudy = {this.state.activeCaseStudy}/>
      </div>
    )
  }
}

export default CaseStudy;
