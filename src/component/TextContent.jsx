
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {imgPath} from '../services/common';


class TextContent extends React.Component{
    render(){
        return(
            <section className="text-centent">
            <div className="grid-container ">
              <div className="grid-x align-middle grid-margin-x">
                <div className="medium-12 cell">
                    { //eslint-disable-next-line
                    }<h3 className="banner-info"><span>{this.props.data.extra_content_title.replace(/\&amp;/g,'&')}</span></h3>

                    <h6>{ReactHtmlParser(imgPath(this.props.data.extra_content_description))}</h6>
                  <p>{ReactHtmlParser(imgPath(this.props.data.extra_content_body))}</p>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default TextContent;
