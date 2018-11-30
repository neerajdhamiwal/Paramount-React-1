import React from 'react';
import CaseStudylist from '../component/CaseStudylist.jsx';
import FeaturedContent from '../component/FeaturedContent.jsx';

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
      <CaseStudylist/>
      </div>
    )
  }
}

export default CaseStudy;
