
import React from 'react';
import {apiUrl } from '../services/common.js';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars

class GridListScnd extends React.Component{
    render(){
        return(
            this.props.data.length>0? <div className="grid-container">
                    <h4>{ReactHtmlParser(this.props.data[0].block_title)}</h4>
                    <div className="grid-x align-center block-latest-reads">
                        {this.props.data.map((obj, i) => {
                            return <div key ={i} className="medium-4 cell img-block">
                            <Link className="letest-read-link" to={obj.link_to_node}>
                                <div className="img ">
                                    <img src={apiUrl+obj.image_url} alt="" />
                                </div>
                                <div className="img-content">
                                    <h6>{ReactHtmlParser(obj.title)}</h6>
                                    {obj.id?<h2>
                                            <Link to="/resources/case-studies">{ReactHtmlParser(obj.description)}
                                    <div className="fs">Read more..</div></Link>
                                        </h2>:obj.nid?
                                            <h2>
                                               {ReactHtmlParser(obj.description)}
                                                    <div className="fs">Read more..</div>
                                            </h2>:''}
                                </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>:''
        )
    }
}
export default GridListScnd;
