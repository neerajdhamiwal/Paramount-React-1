
import React from 'react';
import BottomBanner from '../assets/img/team-banner-bg2.png';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';

class BFlipperBanner extends React.Component{
    render(){
        return(
            <section className="main-banner bottom-100 award-banner team-scnd-banner career-banner">
                <div className="grid-container custom-grid custom-grid-right">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.nodeData[0].content_ctaflip_title)}</span><br/></h3>
                            {/*<h6>{this.props.nodeData[0].content_ctaflip_description}</h6><br/>*/}
                            {ReactHtmlParser(this.props.nodeData[0].content_ctaflip_body)}
                            {this.props.nodeData[0].content_ctaflip_cta_title!==''? <a className="button" href={this.props.nodeData[0].content_ctaflip_cta_url}>{ReactHtmlParser(this.props.nodeData[0].content_ctaflip_cta_title)}</a>:''}
                            {this.props.nodeData[0].content_ctaflip_flip_title!==''? <div className="banner-img-link">
                                    <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">
                                        {this.props.nodeData.map((data) => {
                                            return  <div className="cell shrink team-banner-be"><a href="#">{ReactHtmlParser(data.content_ctaflip_flip_title)}</a></div>

                                        })}
                                    </div>
                                    {/*<img>{data.content_ctaflip_flip_image}</img>*/}
                                </div>: ''}
                        </div>
                        <div className="medium-6 cell">
                            <img src={BottomBanner} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BFlipperBanner;
