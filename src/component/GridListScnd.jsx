
import React from 'react';
import GridImgPlaceholder from '../assets/img/img4.png';
import {apiUrl, decodeUri, jsonMiddleware, } from '../services/common.js';
import requestService from '../services/request.js';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';


class GridListScnd extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('this.props.data.length',this.props.data.length)
        return(
            this.props.data.length>0? <div className="grid-container">
                    <h4>{ReactHtmlParser(this.props.data[0].block_title)}</h4>
                    <div className="grid-x align-center block-latest-reads">
                        {this.props.data.map((obj) => {
                            return <div className="medium-4 cell img-block">
                                <div className="img ">
                                    <img src={apiUrl+obj.image_url} alt="image" />
                                </div>
                                <div className="img-content">
                                    <h6>{ReactHtmlParser(obj.title)}</h6>
                                    {obj.id?<h2><a href="#">{ReactHtmlParser(obj.description)} Read more..</a></h2>:obj.nid?<h2><a href={"/casestudy/article?nid="+obj.nid}>{ReactHtmlParser(obj.description)} Read more..</a></h2>:''}

                                </div>
                            </div>
                        })}
                    </div>
                </div>:''
        )
    }
}
export default GridListScnd;