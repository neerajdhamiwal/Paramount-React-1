import React from 'react';
import ImgBanner from '../assets/img/paramount-edge.png';
import ImgBannerTwo from '../assets/img/services-sub-two.png';
import ImgBannerThree from '../assets/img/expertise-sub-menu.png';


import ReactHtmlParser from 'react-html-parser';



class AwardBanner extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
        return(
          <section className= {`bottom-100 ${this.props.customClass}` }>
      <div className="grid-container custom-grid custom-grid-right">
        <div className="grid-x align-right align-middle grid-margin-x wow fadeInUp">
          <div className="medium-5 cell small-order-change">
            <h3 className="banner-info"><span>{ReactHtmlParser(this.props.nodeData[0].node_title)}</span><br/>
                {ReactHtmlParser(this.props.nodeData[0].node_subtitle_title)}</h3>
            {/*<h6>Lorem Ipsum is simply dummy text of the printing and typesetting indu*/}
              {/*stry. Lorem Ipsum has been the industry's standard dummy text ever since the */}
              {/*1500s, when an unknown printer took a galley of type.</h6>*/}
            <p>{ReactHtmlParser(this.props.nodeData[0].node_description)}</p>
            <p>{ReactHtmlParser(this.props.nodeData[0].node_body)}</p>
          </div>
          <div className="medium-6 cell services-sub-menu">
            <img src={ImgBanner} alt="Banner"/>
          </div>

          <div className="medium-6 cell services-sub-menu-two">
            <img src={ImgBannerTwo} alt="Banner"/>
          </div>

          <div className="medium-6 cell technologies-government-banner">
            <img src={ImgBannerThree} alt="Banner"/>
          </div>

        </div>
      </div>
    </section>
        )
    }
}

AwardBanner.defaultProps = {
    customClass: "main-banner"
}
export default AwardBanner;
