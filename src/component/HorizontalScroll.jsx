
import React from 'react';
import teamBanner from '../assets/img/team-banner-bg2.png';
import ReactHtmlParser from 'react-html-parser';




class HorizontalScroll extends React.Component{
    render(){
        return(
            <div className="jumbotron scroll-relative">
            <div className="horizontal-scroll-wrapper squares paroller-example">

  <div className="one">
    <h4>Our Mission</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <span>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</span>
</div>
<div></div>
  <div className="two">
    <h4>Our Mission</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <span>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</span>
</div>

</div>
</div>

        )
    }
}
export default HorizontalScroll;
