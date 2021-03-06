import React from 'react';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import WOW from 'wowjs';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars

class CaseStudylist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        caseStudyData: []
      }
  }
  componentDidMount(){
      new WOW.WOW(
          {
              animateClass: 'animated',
              offset:       100,
          }
      ).init();
  }
  render(){
    return(
        <div className="addAttr">
            {this.props.activeCaseStudyData.map((caseStudy, i) => {
                if(i !== 0){
                  if(i%2 ===0){
                      return <div key={i} className="grid-container custom-grid custom-grid-right">
                        <div className="grid-x grid-padding-x height-750 align-middle">
                          <div className="medium-5 cell">
                              <div className="body-font-style blog-right-img-text">
                                  {/*<ShowMore id={`caseList${i}`} longText= {caseStudy.field_body}>*/}
                                  {/*</ShowMore>*/}
                                  {caseStudy.field_body}
                              </div>
                            <Link to = {caseStudy.read_more_url} className="button mt-15">Read more</Link>
                          </div>
                          <div className="medium-7 cell no-padding wow slideInRight">
                            <div className="img-relative-title-ld">
                              <div className="grid">
                                <div className="grid__item">
                                  <div className="box">
                                    <div className="box__shadow"></div>
                                    <img className="box__img" src={apiUrl + caseStudy['field_secondary_image']} alt=""/>
                                    <h2>{ReactHtmlParser(caseStudy.title)}</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                  else{
                   return <section key={i} className="left-image-right-content">
                          <div className="grid-container custom-grid custom-grid-left">
                          <div className="grid-x align-middle">
                          <div className="small-12 medium-7 cell no-padding wow slideInLeft">
                          <div className="img-relative-title-ru">
                          <h2 className="relative-title">{ReactHtmlParser(caseStudy.title)}</h2>
                    <div className="left-image-block"><img src={apiUrl + caseStudy['field_secondary_image']} alt="placeholder"/></div>
                  </div>
                  </div>
                    <div className="small-12 medium-5 cell">
                      <div className="content-inner pl-155 blog-page-content">
                        {/*<ShowMore id={`caseList${i}`} longText= {caseStudy.field_body}>*/}
                        {/*</ShowMore>*/}
                          {caseStudy.field_body}
                          <div className="clearfix"></div>
                          <Link to = {caseStudy.read_more_url} className="button mt-15">Read more</Link>
                      </div>
                    </div>
                  </div>
                  </div>
                  </section>
                  }
                }
                else{
                    return false;
                }
            })
        }
        </div>
    )
  }

}

export default CaseStudylist;
