import React from 'react';
import FooterHeading from '../component/FooterHeading.jsx';
import FooterSecndHeading from '../component/FooterSecndHeading.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import AwardBanner from '../component/AwardBanner.jsx';
import {jsonMiddleware} from '../services/common';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import WOW from 'wowjs';
import $ from 'jquery';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import TextContent from '../component/TextContent.jsx';

let nid = ''



class ExpertiseArticle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ExpertiseGovData: {},
            loading: true

        }
    }

    componentWillMount(){
        requestService.getService(`/services-node-data/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
                let ids = ['img_des_id','sub_block_id', 'secondary_sub_block_id','secondary_img_des_id', 'extra_content_id'];
                this.setState({loading: false});
                nid = this.props.location.search.substring(this.props.location.search.indexOf("=")+1)
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
            this.state.loading? <center >
                    <Loader
                        type="ThreeDots"
                        color="#fd302a"
                        height="100"
                        width="100"
                    />
                </center> :
             <div>
                 {Object.keys(this.state.ExpertiseGovData).length>0? <AwardBanner customClass = "main-banner award-banner" nid={nid} nodeData = {this.state.ExpertiseGovData[Object.keys(this.state.ExpertiseGovData)[0]][0]}></AwardBanner>: ''}
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
                 {this.state.ExpertiseGovData.hasOwnProperty('secondary_sub_block_id')? <FooterSecndHeading subBlockData = {this.state.ExpertiseGovData['secondary_sub_block_id'][0]}/>:''}
                 {this.state.ExpertiseGovData.hasOwnProperty('extra_content_id')? this.state.ExpertiseGovData['extra_content_id'][0].map((obj) => {
                     return <TextContent data = {obj}/>
                     }) :''}
                 {
                     this.state.ExpertiseGovData.hasOwnProperty('secondary_img_des_id')? this.state.ExpertiseGovData['img_des_id'][0].map((obj, i) => {
                             if ((i + 1) % 2 === 0) {
                                 return <LeftImgRContent data={obj} secondary = "true"/>
                             }
                             else {
                                 return <RightImgLContent data={obj} secondary = "true"/>
                             }
                         }): ''
                 }

             </div>
        )
    }
}
export default ExpertiseArticle;
