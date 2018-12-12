
import React from 'react';
import ReactHtmlParser from 'react-html-parser';


class TextContent extends React.Component{
    render(){
        return(
            <section className="text-centent">
            <div className="grid-container custom-grid custom-grid-right">
              <div className="grid-x align-middle grid-margin-x pl-155">
                <div className="medium-10 cell pr-155">
                  <h3 className="banner-info"><span>Expertise in</span><br/>
                  Governemnt</h3>
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>
                  <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more. but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.</p>
                </div>
              </div>
            </div>
          </section>

        )
    }
}
export default TextContent;
