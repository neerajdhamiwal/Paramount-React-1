
import React from 'react';
import GridImgPlaceholder from '../assets/img/img4.png';
import ReactHtmlParser from 'react-html-parser';


class FlipperBanner extends React.Component{
    render(){
        return(
            <section className="main-banner bottom-100 award-banner team-scnd-banner career-banner">
                <div className="grid-container custom-grid custom-grid-right">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-5 cell small-order-change">
                            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.nodeData[0].node_title)}</span><br/>
                                {ReactHtmlParser(this.props.nodeData[0].node_subtitle)}</h3>
                            <h6>{ReactHtmlParser(this.props.nodeData[0].node_description)}</h6>
                            <div className="banner-img-link">
                                <div className="grid-x grid-margin-x grid-margin-y img-shadow-hover">
                                    {this.props.nodeData.map((data) => {
                                        return  <div className="cell shrink team-banner-be"><a href="#">{ReactHtmlParser(data.node_flipper_title)}</a></div>

                                    })}
                                </div>
                                {/*<img>{data.image_flipper_image}</img>*/}
                            </div>
                        </div>
                        <div className="medium-6 cell">
                            <img src="img/team-banner-bg2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default FlipperBanner;
