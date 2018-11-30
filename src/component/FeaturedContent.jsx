import React from 'react';
import BannerImg from '../assets/img/banner-with-content.jpeg';

var BannerStyle = {
  backgroundImage: 'url(' + BannerImg + ')'
};

class FeaturedContent extends React.Component{
  render(){
    return(
      <div>
      <section className="main-banner banner-with-content" style={BannerStyle}>
      <div className="grid-container">
        <div className="grid-x align-right align-middle grid-margin-x">
          <div className="medium-4 cell small-order-change">
            <h3 className="banner-info"><span>Featured Case Study</span><br/>
            Company Name</h3>
          </div>
          </div>
        </div>
    </section>
    <section className="main-banner bottom-100 top-100 banner-with-content-box">
      <div className="grid-container">
        <div className="grid-x align-right align-middle grid-margin-x">
            <div className="medium-5 cell small-order-change">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              <button className="button">Read more</button>
            </div>
            <div className="medium-5 cell"></div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}

export default FeaturedContent;
