import React from 'react';
import FooterHeading from '../component/FooterHeading.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import AwardBanner from '../component/AwardBanner.jsx';
import {jsonMiddleware} from '../services/common';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import WOW from 'wowjs';
import $ from 'jquery';

class ExpertiseArticle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ExpertiseGovData: {}
        }
    }

    componentWillMount(){
        requestService.getService('/services-node-data/24')
            .then((response) => {
                let ids = ['img_des_id','sub_block_id'];
                this.setState({ExpertiseGovData: jsonMiddleware(response.data, ids)});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
             <div>
                 {Object.keys(this.state.ExpertiseGovData).length>0? <AwardBanner customClass = "main-banner award-banner" nodeData = {this.state.ExpertiseGovData[Object.keys(this.state.ExpertiseGovData)[0]][0]}></AwardBanner>: ''}
                <div className="top-100 bottom-100 clearfix"></div>
                 {this.state.ExpertiseGovData.hasOwnProperty('sub_block_id')? <FooterHeading subBlockData = {this.state.ExpertiseGovData['sub_block_id'][0]}/>:''}
                {
                    this.state.ExpertiseGovData.hasOwnProperty('img_des_id')? this.state.ExpertiseGovData['img_des_id'][0].map((obj, i) => {
                        if ((i + 1) % 2 === 0) {
                            return <LeftImgRContent data={obj}/>
                        }
                        else {
                            return <RightImgLContent data={obj}/>
                        }
                    }): ''
                }
            </div>
        )
    }
}
export default ExpertiseArticle;
