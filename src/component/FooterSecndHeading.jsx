import React from 'react';
import {customDivideData, imgPath} from '../services/common';
import ReactHtmlParser from 'react-html-parser';

class FooterHeading extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            footerHeadData : [],
            customData: []
        }
    }


    render(){
        return(
            <section className="four-column-outer pt-50 pb-50 ">
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="heading-four-column">
                            <h3>{ReactHtmlParser(this.props.subBlockData[0].secondary_sub_block_title)}</h3>
                        </div>
                        {this.props.subBlockData.length>0?
                            customDivideData(this.props.subBlockData, 2).map((subArr, index) => {
                                    return  <div className="small-12 cell">
                                        <div className="grid-x pl-155">
                                            {
                                                subArr.map((heading, i) => {
                                                    if(i===1) {
                                                        return <div className="small-12 medium-5 cell">
                                                            <div className="four-column-content four-col-left four-col-right">
                                                                <h3 href="#">{ReactHtmlParser(heading.secondary_sub_block_heading)}</h3>
                                                                <p>{ReactHtmlParser(imgPath(heading.secondary_sub_block_description))}</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    else{
                                                        return <div className="small-12 medium-5 cell">
                                                            <div className="four-column-content four-col-left">
                                                                <h3 href="#">{ReactHtmlParser(heading.secondary_sub_block_heading)}</h3>
                                                                <p>{ReactHtmlParser(imgPath(heading.secondary_sub_block_description))}</p>
                                                            </div>
                                                        </div>
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            ):''}

                    </div>
                </div>
            </section>
        )
    }
}
export default FooterHeading;
