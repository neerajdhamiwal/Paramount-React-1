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
        requestService.getService('/landing-page-data/24')
            .then((response) => {
                let ids = ['slider_id','flipper_id','logo_id','sub_block_id','image_description_id','hd_id'];
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
            this.state.ExpertiseGovData.hasOwnProperty('flipper_id')? <div>
                <AwardBanner customClass = "main-banner award-banner" nodeData = {this.state.ExpertiseGovData['sub_block_id'][0]}></AwardBanner>
                <div className="top-100 bottom-100 clearfix"></div>
                 <FooterHeading subBlockData = {this.state.ExpertiseGovData['sub_block_id'][0]}/>
                {
                    this.state.ExpertiseData.hasOwnProperty('image_description_id')? this.state.ExpertiseGovData['image_description_id'][0].map((obj, i) => {
                        if ((i + 1) % 2 === 0) {
                            return <LeftImgRContent data={obj}/>
                        }
                        else {
                            return <RightImgLContent data={obj}/>
                        }
                    }): ''
                }
            </div>: ''
        )
    }
}
export default ExpertiseArticle;
