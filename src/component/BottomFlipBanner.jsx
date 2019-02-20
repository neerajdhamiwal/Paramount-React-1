
import React from 'react';
import BottomBanner from '../assets/img/makeCareer.jpg';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars


class BFlipperBanner extends React.Component{
    render(){
        return(
            <section className="main-banner bottom-100 award-banner team-scnd-banner career-banner">
                <div className="grid-container custom-grid custom-grid-right">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="small-12 medium-5 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.nodeData[0].content_ctaflip_title)}</span><br/></h3>
                            {this.props.nodeData[0].content_ctaflip_description!==''?<h6>{ReactHtmlParser(this.props.nodeData[0].content_ctaflip_description)}</h6>:''} <br/>
                            <ShowMore id="bottomFlipBnnr" longText= {this.props.nodeData[0].content_ctaflip_body}>
                            </ShowMore>
                            {this.props.nodeData[0].content_ctaflip_cta_title!==''? <Link className="button" to={this.props.nodeData[0].content_ctaflip_cta_url.substring(9)}>{ReactHtmlParser(this.props.nodeData[0].content_ctaflip_cta_title)}</Link>:''}
                            {this.props.nodeData[0].content_ctaflip_flip_title!==''? <div className="banner-img-link">
                                    <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">
                                        {this.props.nodeData.map((data, i) => {
                                            return  <div key = {i} className="cell shrink team-banner-be"><Link to={data.content_ctaflip_flip_cta_url.substring(9)}>{ReactHtmlParser(data.content_ctaflip_flip_title)}</Link></div>

                                        })}
                                    </div>
                                    {/*<img>{data.content_ctaflip_flip_image}</img>*/}
                                </div>: ''}
                        </div>
                        <div className="small-12 medium-6 cell">
                            <img src={BottomBanner} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BFlipperBanner;
