
import React from 'react';
import teamBanner from '../assets/img/team-banner-bg2.png';
import ReactHtmlParser from 'react-html-parser';
import imgPath from '../services/common';

class HorizontalScroll extends React.Component{
    render(){
        return(
            <div className="jumbotron scroll-relative arrow-bg">
            <div className="horizontal-scroll-wrapper squares paroller-example">
                {this.props.standardData.map((obj, i)=>{
                    return <div className="one">
                        <h4>{ReactHtmlParser(obj.field_standard_title_hd)}</h4>
                        <p>{ReactHtmlParser(imgPath(obj.field_standard_description_hd))}</p>
                    </div>
                })}
</div>
</div>

        )
    }
}
export default HorizontalScroll;
