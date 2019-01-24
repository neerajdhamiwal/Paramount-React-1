import React from 'react';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';
import WOW from 'wowjs';
import ShowMore from 'react-show-more';


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
        <div>
            {this.props.activeCaseStudyData.map((caseStudy, i) => {
                if(i !== 0){
                  if(i%2 ===0){
                      return <div key={i} className="grid-container custom-grid custom-grid-right">
                        <div className="grid-x grid-padding-x height-750 align-middle">
                          <div className="medium-5 cell">
                              <div className="body-font-style">
                              <ShowMore
                                  lines={15}
                                  more='Show more'
                                  less='Show less'
                                  anchorClass=''
                              >
                                  {ReactHtmlParser(caseStudy.field_body)}
                              </ShowMore>
                              </div>
                            <a href = {caseStudy.read_more_url} className="button mt-15">Read more</a>
                          </div>
                          <div className="medium-7 cell no-padding wow slideInRight">
                            <div className="img-relative-title-ld">
                              <div className="grid">
                                <div className="grid__item">
                                  <div className="box">
                                    <div className="box__shadow"></div>
                                    <img className="box__img" src={apiUrl + caseStudy.image} alt=""/>
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
                          <div className="large-7 cell no-padding wow slideInLeft">
                          <div className="img-relative-title-ru">
                          <h2 className="relative-title">{ReactHtmlParser(caseStudy.title)}</h2>
                    <img src={apiUrl + caseStudy.image} alt="placeholder"/>
                  </div>
                  </div>
                    <div className="large-5 cell">
                      <div className="content-inner pl-155">
                        <ShowMore id={`caseList${i}`} longText= {caseStudy.field_body}>
                        </ShowMore>
                          <ShowMore
                              lines={15}
                              more='Show more'
                              less='Show less'
                              anchorClass=''
                          >
                              {ReactHtmlParser(caseStudy.field_body)}
                              </ShowMore>
                        <a href = {caseStudy.read_more_url} className="button mt-15">Read more</a>
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
