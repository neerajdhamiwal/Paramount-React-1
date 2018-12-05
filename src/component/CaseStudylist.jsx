import React from 'react';
import Placeholder2 from '../assets/img/placeholder2.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';

class CaseStudylist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        caseStudyData: []
      }
  }
  componentWillMount(){
      requestService.getService('/paragraph-data?_format=json')
        .then((response) => {
        this.setState({caseStudyData: response.data})
      })
          .catch((err) => {
            console.log(err);
          })
  }
  render(){
    return(
        <div>
            {this.state.caseStudyData.map((caseStudy) => {
              return <section className="left-image-right-content top-100 bottom-100">
                <div className="grid-container custom-grid custom-grid-left">
                  <div className="grid-x align-middle">
                    <div className="large-7 cell no-padding">
                      <div className="img-relative-title-ru">
                        <h2 className="relative-title">{caseStudy.title}</h2>
                        <img src={apiUrl + caseStudy.field_basic_image} alt="placeholder"/>
                      </div>
                    </div>
                    <div className="large-5 cell">
                      <div className="content-inner pl-155">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.</h3>
                        <p className="ptb-40">{caseStudy.field_body}</p>
                        <button className="button">Read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            })
        }
        </div>
    )
  }

}

export default CaseStudylist;
