import React from 'react';
import { Link } from 'react-router';
import Placeholder2 from '../assets/img/placeholder2.png';

class CaseStudylist extends React.Component {
  render(){
    return(
      <section className="left-image-right-content top-100 bottom-100">
        <div className="grid-container custom-grid custom-grid-left">
          <div className="grid-x align-middle">
            <div className="large-7 cell no-padding">
              <div className="img-relative-title-ru">
              <h2 className="relative-title">Case Study2</h2>
              <img src={Placeholder2} alt="placeholder" />
            </div>
            </div>
            <div className="large-5 cell">
              <div className="content-inner pl-155">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <p className="ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="/casestudy2/article" className="button">Read more</a>
              </div>
            </div>
            </div>
          </div>
        </section>
    )
  }

}

export default CaseStudylist;
