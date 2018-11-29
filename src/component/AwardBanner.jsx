import React from 'react';
import ImgBanner from '../assets/img/team-banner-bg.png';

class AwardBanner extends React.Component{
    render(){
        return(
          <section className="main-banner bottom-100 award-banner">
      <div className="grid-container custom-grid custom-grid-right">
        <div className="grid-x align-right align-middle grid-margin-x">
          <div className="medium-5 cell small-order-change">
            <h3 className="banner-info"><span>Meet The</span><br/>
            Team</h3>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.</p>
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
export default AwardBanner;
