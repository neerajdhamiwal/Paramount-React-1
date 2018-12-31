import React from 'react';
import { Link } from 'react-router';
import {apiUrl, COUNT} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';

class CaseStudylist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        caseStudyData: []
      }
  }
  render(){
    return(
        <div>
            {this.props.activeCaseStudyData.map((caseStudy, i) => {
                if(i !== 0){
                  if(i%2 ==0){
                      return <div className="grid-container custom-grid custom-grid-right">
                        <div className="grid-x grid-padding-x height-750 align-middle">
                          <div className="medium-5 cell">
                              {/*<h2 className="relative-title">Our Services</h2>*/}
                              {/*<h3 className="heading-content">{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>*/}
                            <ShowMore id={`caseListOdd${i}`} longText= {caseStudy.field_body}>
                            </ShowMore>
                            <a href = {"/casestudy/article?nid="+caseStudy.id} className="button">Read more</a>
                          </div>
                          <div className="medium-7 cell no-padding">
                            <div className="img-relative-title-ld">
                              <div className="grid">
                                <div className="grid__item">
                                  <div className="box">
                                    <div className="box__shadow"></div>
                                    <img className="box__img" src={apiUrl + caseStudy.image} alt="Some image"/>
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
                   return <section className="left-image-right-content">
                          <div className="grid-container custom-grid custom-grid-left">
                          <div className="grid-x align-middle">
                          <div className="large-7 cell no-padding">
                          <div className="img-relative-title-ru">
                          <h2 className="relative-title">{ReactHtmlParser(caseStudy.title)}</h2>
                    <img src={apiUrl + caseStudy.image} alt="placeholder"/>
                  </div>
                  </div>
                    <div className="large-5 cell">
                      <div className="content-inner pl-155">
                        <h3></h3>
                        <ShowMore id={`caseList${i}`} longText= {caseStudy.field_body}>
                        </ShowMore>
                        <a href = {"/casestudy/article?nid="+caseStudy.id} className="button">Read more</a>
                      </div>
                    </div>
                  </div>
                  </div>
                  </section>
                  }
                }
            })
        }
        </div>
    )
  }

}

export default CaseStudylist;
