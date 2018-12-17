import React from 'react';
import { Link } from 'react-router';
import Placeholder2 from '../assets/img/placeholder2.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';


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
                      return <section className="left-image-right-content top-100 bottom-100">
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
                                <p className="ptb-40">{ReactHtmlParser(caseStudy.field_body)}</p>
                                <a href = {"/casestudy/article?nid="+caseStudy.id} className="button">Read more</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                  }
                  else{
                   return  <div class="grid-container custom-grid custom-grid-right">
                      <div class="grid-x grid-padding-x height-750 align-middle">
                        <div class="medium-5 cell">
                            {/*<h2 class="relative-title">Our Services</h2>*/}
                          {/*<h3 class="heading-content">{ReactHtmlParser(this.props.data.image_description_subheading)}</h3>*/}
                          <p>{ReactHtmlParser(caseStudy.field_body)}</p>
                        </div>
                        <div class="medium-7 cell no-padding">
                          <div class="img-relative-title-ld">
                            <div class="grid">
                              <a class="grid__item">
                                <div class="box">
                                  <div class="box__shadow"></div>
                                  <h2>{ReactHtmlParser(caseStudy.title)}</h2>
                                  <img class="box__img" src={apiUrl + caseStudy.image} alt="Some image"/>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                }
            })
        }
        </div>
    )
  }

}

export default CaseStudylist;
