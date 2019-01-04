import React from 'react';
import ImgBanner from '../assets/img/paramount-edge.png';
import ImgBannerTwo from '../assets/img/services-sub-two.png';
import ImgBannerThree from '../assets/img/expertise-sub-menu.png';
import ReactHtmlParser from 'react-html-parser';
// import ShowMore from 'react-show-more';
import ShowMore from './ShowMore.jsx';

class AwardBanner extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
        return(
          <section className= {`mb-50 ${this.props.customClass}` }>
      <div className="grid-container custom-grid custom-grid-right">
        <div className="grid-x align-right grid-margin-x wow fadeInUp">
          <div className="medium-5 cell small-order-change">
            <h3 className="banner-info">{ReactHtmlParser(this.props.nodeData[0].node_title)}<br/>
              <span>{ReactHtmlParser(this.props.nodeData[0].node_subtitle_title)}</span></h3>
            {/*<p className="toggle-1">{ReactHtmlParser(imgPath(this.props.nodeData[0].node_description))}</p>*/}
            {/*<a href="javascript:void(0)">Show Toggle...</a>*/}

              {this.props.nodeData[0].node_description !==''? <ShowMore
                longText={this.props.nodeData[0].node_description} id="bannerDesc" hiddenHeight= {430}/>:''}
              {this.props.nodeData[0].node_body!==''? <ShowMore
                longText={this.props.nodeData[0].node_body} id="bannerBody" hiddenHeight= {430}/>:''}
            {/*<ShowMore lines={COUNT}*/}
                      {/*more='View more'*/}
                      {/*less='View less'*/}
                      {/*anchorClass=''>*/}
              {/*<p>{ReactHtmlParser(imgPath(this.props.nodeData[0].node_description))}</p>*/}
            {/*</ShowMore>*/}
            {/*<ShowMore lines={COUNT}*/}
                      {/*more='View more'*/}
                      {/*less='View less'*/}
                      {/*anchorClass=''>*/}
              {/*<p>{ReactHtmlParser(imgPath(this.props.nodeData[0].node_body))}</p>*/}
            {/*</ShowMore>*/}
            {/*<p className="toggle-1">{ReactHtmlParser(imgPath(this.props.nodeData[0].node_body))}</p>*/}
            {/*<a href="javascript:void(0)">Show Toggle...</a>*/}
          </div>
            {this.props.nid == 24? <div><div className="medium-6 cell services-sub-menu">
                  <img src={ImgBanner} alt="Banner"/>
                </div>
                </div>: this.props.nid == 39? <div><div className="medium-6 cell services-sub-menu">
                      <img src={ImgBanner} alt="Banner"/>
                    </div>
                    </div>:''}

            {this.props.nid == 47? <div className="medium-6 cell services-sub-menu-two">
            <img src={ImgBannerThree} alt="Banner"/>
            </div>:this.props.nid == 48? <div className="medium-6 cell services-sub-menu-two">
                      <img src={ImgBannerThree} alt="Banner"/>
                    </div>: this.props.nid== 49?<div className="medium-6 cell services-sub-menu-two">
                      <img src={ImgBannerThree} alt="Banner"/>
                    </div>:''}

            {this.props.nid == 45?<div><div className="medium-6 cell technologies-government-banner">
            <img src={ImgBannerTwo} alt="Banner"/>
          </div></div>: this.props.nid== 52? <div><div className="medium-6 cell technologies-government-banner">
                      <img src={ImgBannerTwo} alt="Banner"/>
                    </div></div>:''}
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
