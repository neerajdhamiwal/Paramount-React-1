
import React from 'react';
import teamBanner from '../assets/img/team-banner-bg2.png';
import ReactHtmlParser from 'react-html-parser';




class HorizontalScroll extends React.Component{
    render(){
        return(
            <div className="jumbotron scroll-relative">
            <div className="horizontal-scroll-wrapper squares paroller-example">
                {this.props.standardData.map((obj, i)=>{
                    return <div className="one">
                        <h4>{obj.field_standard_title_hd}</h4>
                        <p>{obj.field_standard_description_hd}</p>
                        <span>Where does it come from?
                                Contrary to po
                            pular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classNameical Latin literature from
                            45 BC, making it over 2000 years old. Richard McClintock,</span>
                    </div>
                })}
</div>
</div>

        )
    }
}
export default HorizontalScroll;
