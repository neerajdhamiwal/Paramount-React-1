
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {imgPath, COUNT} from '../services/common';
import ShowMore from 'react-show-more';


class HorizontalScroll extends React.Component{
    render(){
        return(
            <div className="jumbotron scroll-relative arrow-bg">
            <div className="horizontal-scroll-wrapper squares paroller-example">
                {this.props.standardData.map((obj, i)=>{
                    return <div className="one">
                        <h4>{ReactHtmlParser(obj.field_standard_title_hd)}</h4>
                        <ShowMore lines={COUNT}
                                  more='View more'
                                  less='View less'
                                  anchorClass=''>
                            <p>{ReactHtmlParser(imgPath(imgPath(obj.field_standard_description_hd)))}</p>
                        </ShowMore>
                    </div>
                })}
</div>
</div>

        )
    }
}
export default HorizontalScroll;
