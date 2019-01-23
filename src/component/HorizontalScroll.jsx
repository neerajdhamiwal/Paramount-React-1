
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';
import img from '../assets/img/mission-vision.png';
import $ from 'jquery';
require('paroller.js');

const styleObj = {backgroundImage: `url(${img})`}

class HorizontalScroll extends React.Component{

  componentDidMount(){
    $('.jumbotron').paroller();
  }
    render(){
        return(
            <div className="jumbotron scroll-relative arrow-bg" style={styleObj} data-paroller-factor="0.3" data-paroller-direction="horizontal">
            <div className="horizontal-scroll-wrapper squares paroller-example">
                {this.props.standardData.map((obj, i)=>{
                    return <div key={i} className="one">
                        <h4>{ReactHtmlParser(obj.field_standard_title_hd)}</h4>
                        <ShowMore id={`hozntlscroll${i}`} longText= {obj.field_standard_description_hd}>
                        </ShowMore>
                    </div>
                })}
</div>
</div>

        )
    }
}
export default HorizontalScroll;
