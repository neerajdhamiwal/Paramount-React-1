
import React from 'react';
import GridImgPlaceholder from '../assets/img/img4.png';
import {apiUrl, decodeUri, jsonMiddleware, } from '../services/common.js';
import requestService from '../services/request.js';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';


class GridList extends React.Component{
    constructor(){
        super()
        this.state = {
            latestReadData:[]
        }
    }
    componentWillMount(){
        requestService.getService('/latest-reads')
            .then((response) => {
                this.setState({latestReadData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount(){

    }
    render(){
        return(
          this.state.latestReadData.length>0?<div className="grid-container">
              <h4>{ReactHtmlParser(this.state.latestReadData[0].block_title)}</h4>
            <div className="grid-x align-center block-latest-reads">
                {this.state.latestReadData.map((obj) => {
                    return <div className="medium-4 cell img-block">
                        <div className="img ">
                            <img src={decodeUri(apiUrl+obj.image_url)} alt="image" />
                        </div>
                        <div className="img-content">
                            <h6>{ReactHtmlParser(obj.title)}</h6>
                            <h2><a href="#">{ReactHtmlParser(obj.description)}</a></h2>
                        </div>
                    </div>
                })}
              </div>
            </div>:''
        )
    }
}
export default GridList;
