import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';
import TagLinks from '../component/TagLinks.jsx';


import $ from 'jquery';

class CaseStudy extends React.Component{
  componentDidMount(){
    //Foundation.addToJquery($);
    $(document).foundation();
  }
  render() {
    return(
      <div>
      <FeaturedContent/>
    <TagLinks/>
  <div className=" bottom-100 clearfix"></div>
      <CaseStudylist/>
      </div>
    )
  }
}

export default CaseStudy;
