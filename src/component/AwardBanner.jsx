import React from 'react';
import ImgBanner from '../assets/img/team-banner-bg.png';
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
            <p>{ReactHtmlParser(this.props.nodeData[0].node_description)}</p>
            <p>{ReactHtmlParser(this.props.nodeData[0].node_body)}</p>
          </div>
          <div className="medium-6 cell">
            <img src={ImgBanner} alt="Banner"/>
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
