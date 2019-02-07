import React from 'react';
import $ from 'jquery';
import {apiUrl} from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';
import WOW from 'wowjs';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars


class TagLinks extends React.Component{

constructor(props){
  super(props)
    this.state = {
    name: [],
    activeObject:{}
    }
    this.clickHandler = this.clickHandler.bind(this);
 }
    componentDidMount(){
        new WOW.WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        ).init();
    }

    componentWillReceiveProps(nextProps){
        $('#service').on('click', 'li a', function() {
            $('#service a.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }
    clickHandler(e){
        localStorage.setItem('activeMenu', this.props.caseStudyList[0].name.split(',')[e.target.id]);
        this.props.getTermInfo(this.props.caseStudyList[0].id.split(',')[e.target.id]);
    }
    render(){
        return(
          <section className="category-link bottom-50">
        <div className="grid-container  custom-grid custom-grid-right">
          <div className="grid-x">
            <div className="medium-2 cell">
              <ul className="vertical menu" id="service">
                  {this.props.caseStudyList[0].name.split(',').map((value, index) => {
                       //eslint-disable-next-line
                      return <li key={index} onClick={this.clickHandler}><a id={index} className={localStorage.getItem('activeMenu')? (value === localStorage.getItem('activeMenu')?'activeTab':''): (index===0?'activeTab':'')}>{value.replace(/\&amp;/g,'&')}</a></li>
                  })
                  }
              </ul>
            </div>
              {this.props.firstCaseStudy? <div className="medium-10 cell">
                    <div className="grid-x grid-padding-x">
                      <div className="medium-5 cell">
                          <ShowMore id={`tagLink`} longText= {this.props.firstCaseStudy['field_body']} >
                          </ShowMore>
                          {this.props.locate === 'resource'?'':<Link to = {this.props.firstCaseStudy['read_more_url']} className="button mt-15">Read more</Link>}
                      </div>
                      <div className="medium-7 cell no-padding wow slideInRight">
                        <div className="img-relative-title-ld tab-img-h">
                          <img src={apiUrl+this.props.firstCaseStudy['image']} alt="" />
                          <h2 className="relative-title">{ReactHtmlParser(this.props.firstCaseStudy['title'])}</h2>
                        </div>
                      </div>
                    </div>
                  </div>: ''}
          </div>
        </div>
      </section>
        )
    }
}
export default TagLinks;
