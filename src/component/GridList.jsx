
import React from 'react';
import {apiUrl, decodeUri,imgPath } from '../services/common.js';
import requestService from '../services/request.js';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars


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
                this.setState({latestReadData: response.data},()=>{
                  if ($(window).width() < 767) {
                    $('#sliderformobile').addClass('mobile-carousel');
                   } else {
                      $('#sliderformobile').removeClass('mobile-carousel');
                  }

                  $('.mobile-carousel').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: true,
                    //variableWidth: true
                  });
                });
            })
            .catch((err) => {
                //console.log(err);
            })
    }
    componentDidMount(){}
    render(){
        return(
          this.state.latestReadData.length>0?<div className="grid-container grid-latest-reads">
              <h4>{ReactHtmlParser(this.state.latestReadData[0].block_title)}</h4>
            <div className="grid-x align-center block-latest-reads" id="sliderformobile">
                {this.state.latestReadData.map((obj, i) => {
                    return <div key = {i} className="medium-4 cell img-block">
                        <Link className="letest-read-link" to={obj.link_to_node}>
                        <div className="img">
                            <img src={decodeUri(apiUrl+obj.image_url)} alt="" />
                        </div>
                        <div className="img-content">
                            <h6>{ReactHtmlParser(obj.title)}</h6>
                            <h2>{ReactHtmlParser(imgPath(obj.description))}</h2>
                        </div>
                        </Link>
                    </div>
                })}
              </div>
            </div>:''
        )
    }
}
export default GridList;
