
import React from 'react';
import {apiUrl } from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';

class GridListScnd extends React.Component{
    render(){
        return(
            this.props.data.length>0? <div className="grid-container">
                    <h4>{ReactHtmlParser(this.props.data[0].block_title)}</h4>
                    <div className="grid-x align-center block-latest-reads">
                        {this.props.data.map((obj) => {
                            return <div className="medium-4 cell img-block">
                            <a className="letest-read-link" href={obj.link_to_node}>
                                <div className="img ">
                                    <img src={apiUrl+obj.image_url} alt="" />
                                </div>
                                <div className="img-content">
                                    <h6>{ReactHtmlParser(obj.title)}</h6>
                                    <h2>
                                        {ReactHtmlParser(obj.description)}
                                    <div className="fs">Read more..</div>
                                        </h2>
                                </div>
                                </a>
                            </div>
                        })}
                    </div>
                </div>:''
        )
    }
}
export default GridListScnd;
