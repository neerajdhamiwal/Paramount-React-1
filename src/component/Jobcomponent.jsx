
import React from 'react';
import ReactHtmlParser from 'react-html-parser';


class Jobcomponent extends React.Component{
    constructor(props){
        super(props);
    }
componentDidMount(){
     $(document).foundation();
}

    render(){
        console.log(this.props.careerData);
        return(
            <ul className="accordion" data-accordion data-allow-all-closed="true" id="job-tabs">
                {this.props.careerData.hasOwnProperty('nid')?
                    this.props.careerData['nid'][0].map((obj, i)=>{
                        return <li className="accordion-item" data-accordion-item="" >
                            {/*<!-- Accordion tab title -->*/}
                            <a className="accordion-title" aria-controls={`tab${obj.nid}`} role="tab" id={`job${obj.nid}`} aria-expanded="false" aria-selected="false">
                                <div className="job-title">{obj.node_title}</div>
                                <span className="location-view">
                                  <div className="view-job-btn">View Job</div>
                                </span>
                            </a>
                            {/*<!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. -->*/}
                            <div className="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby={`job${obj.nid}`} aria-hidden="true" id={`tab${obj.nid}`}>
                                <div className="grid-x align-justify">
                                    <div className="cell medium-8" id="coltab">
                                        <div className="job-deties-req">
                                            <a> <div className={this.props.duty?'activeTab job-duties':'job-duties'} onClick={this.handleChange}>Duties</div></a>
                                            <a> <div className={!(this.props.duty)?'activeTab job-req':'job-req'} role="tab"  onClick={this.handleChange}>Requirement</div></a>
                                        </div>
                                        {this.props.duty?<p>
                                                {ReactHtmlParser(obj.node_duties)}
                                            </p>: <p>
                                                {ReactHtmlParser(obj.node_requirements)}
                                            </p>}
                                    </div>
                                    <div className="cell medium-4">
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