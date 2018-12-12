
import React from 'react';
import ReactHtmlParser from 'react-html-parser';


class TextContent extends React.Component{
    render(){
        return(
            <section className="text-centent">
            <div className="grid-container custom-grid custom-grid-right">
              <div className="grid-x align-middle grid-margin-x">
                <div className="medium-12 cell pr-155">
                    <h3 className="banner-info"><span>{this.props.data.extra_content_title}</span></h3>

                  <h6>{ReactHtmlParser(this.props.data.extra_content_description)}</h6>
                  <p>{ReactHtmlParser(this.props.data.extra_content_body)}</p>
                </div>
              </div>
            </div>
          </section>

        )
    }
}
export default TextContent;
