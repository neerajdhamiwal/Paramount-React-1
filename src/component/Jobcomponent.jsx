
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';

class Jobcomponent extends React.Component{
    componentDidMount(){
        $(document).foundation();
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);

        setTimeout(() => { $(document).foundation();}, 3000);
    }
    render(){
        return(
            <ul className="accordion" data-accordion data-allow-all-closed="true" id="job-tabs">
                {this.props.careerData.hasOwnProperty('nid')?
                    this.props.careerData['nid'][0].map((obj, i)=>{
                        return <li key={i} className="accordion-item" data-accordion-item="" >
                            {/*<!-- Accordion tab title -->*/}
                            {//eslint-disable-next-line
                            }<a className="accordion-title" aria-controls={`tab${obj.nid}`} role="tab" id={`job${obj.nid}`} aria-expanded="false" aria-selected="false">
                                <div className="job-title">{obj.node_title}</div>
                                <span className="location-view">
                                  <div className="view-job-btn">View Job</div>
                                </span>
                            </a>
                            {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                            <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby={`job${obj.nid}`} aria-hidden="true" id={`tab${obj.nid}`}>
                                <div className="grid-x align-justify">
                                    <div className="cell small-12 medium-8" id="coltab">
                                        <div className="job-deties-req">
                                            {//eslint-disable-next-line
                                            }<a> <div className={this.props.duty?'activeTab job-duties':'job-duties'} onClick={this.handleChange}>Duties</div></a>
                                            {//eslint-disable-next-line
                                            }<a> <div className={!(this.props.duty)?'activeTab job-req':'job-req'} role="tab"  onClick={this.handleChange}>Requirement</div></a>
                                        </div>
                                        {this.props.duty?<p>
                                                {ReactHtmlParser(obj.node_duties)}
                                            </p>: <p>
                                                {ReactHtmlParser(obj.node_requirements)}
                                            </p>}
                                    </div>
                                    <div className="cell small-12 medium-4">
                                        <div className="location-block">
                                            <h6>Job Sites</h6>
                                            <p>{ReactHtmlParser(obj.node_job_site)}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="career-info-btn"><a className="button" href="mailto:careers@paramountsoft.net">Apply Now</a></p>
                            </div>
                        </li>
                    }):''
                }
            </ul>
        )
    }
}
export default Jobcomponent;
