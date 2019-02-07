import React from 'react';
import FooterHeading from '../component/FooterHeading.jsx';
import FooterSecndHeading from '../component/FooterSecndHeading.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import AwardBanner from '../component/AwardBanner.jsx';
import {jsonMiddleware, getMeta} from '../services/common';
import requestService from '../services/request.js';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import TextContent from '../component/TextContent.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';
import DocumentMeta from 'react-document-meta';
import $ from 'jquery';

class ExpertiseArticle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ExpertiseGovData: {},
            loading: true

        }
        this.getMeValue = this.getMeValue.bind(this);
    }

    getMeValue(val) {
        this.setState({meta: val})
        // return val;
    }

    componentWillMount(){
        getMeta(this.props.nid, this.getMeValue);
        requestService.getService(`/services-node-data/${this.props.nid}`)
            .then((response) => {
                let ids = ['img_des_id','sub_block_id', 'secondary_sub_block_id','secondary_img_des_id', 'extra_content_id', 'award_slider_id', 'certificate_slider_id','partner_slider_id','client_slider_id'];
                // this.setState({});
                this.setState({ExpertiseGovData: jsonMiddleware(response.data, ids), loading: false},()=>{
                    $('.addAttr a').prop('target', '_blank');
                });
            })
            .catch((err) => {
                console.log(err);
            })
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
                <DocumentMeta {...this.state.meta}>
                    <div className="addAttr">
                 {Object.keys(this.state.ExpertiseGovData).length>0? <AwardBanner customClass = "main-banner award-banner" nid={this.props.nid} nodeData = {this.state.ExpertiseGovData[Object.keys(this.state.ExpertiseGovData)[0]][0]}></AwardBanner>: ''}
                <div className=" clearfix"></div>
                 {this.state.ExpertiseGovData.hasOwnProperty('sub_block_id')? <FooterHeading subBlockData = {this.state.ExpertiseGovData['sub_block_id'][0]}/>:''}
                    {this.props.nid===52? this.state.ExpertiseGovData.hasOwnProperty('extra_content_id')? this.state.ExpertiseGovData['extra_content_id'][0].map((obj, i) => {

                            return <div><TextContent data = {obj}/>
                                <hr/>
                            </div>
                        }) :'':''}
                {
                    this.state.ExpertiseGovData.hasOwnProperty('img_des_id')? this.state.ExpertiseGovData['img_des_id'][0].map((obj, i) => {
                        if ((i + 1) % 2 === 0) {
                            return <LeftImgRContent key = {i} data={obj}/>
                        }
                        else {

                            return <RightImgLContent key = {i}  data={obj}/>
                        }
                    }): ''
                }
                 {this.state.ExpertiseGovData.hasOwnProperty('secondary_sub_block_id')? <FooterSecndHeading subBlockData = {this.state.ExpertiseGovData['secondary_sub_block_id'][0]}/>:''}
                 {this.props.nid!==52?this.state.ExpertiseGovData.hasOwnProperty('extra_content_id')? this.state.ExpertiseGovData['extra_content_id'][0].map((obj, i) => {

                         return <div key={i}> <TextContent data = {obj}/>
                             <hr/>
                             </div>

                     }) :'':''}
                 {
                     this.state.ExpertiseGovData.hasOwnProperty('secondary_img_des_id')? this.state.ExpertiseGovData['img_des_id'][0].map((obj, i) => {
                             if ((i + 1) % 2 === 0) {
                                 return <RightImgLContent key = {i}  data={obj} secondary = "true"/>
                             }
                             else {
                                 return <LeftImgRContent key = {i}  data={obj} secondary = "true"/>

                             }
                         }): ''
                 }
                    {this.state.ExpertiseGovData.hasOwnProperty('award_slider_id')?this.state.ExpertiseGovData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':''}
                    {this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider nid={this.props.nid}/>: '':''}
                    {this.state.ExpertiseGovData.hasOwnProperty('certificate_slider_id')?this.state.ExpertiseGovData['certificate_slider_id'][0][0].certificate_slider_id? <CertSlider/>: '':''}
                    {this.state.ExpertiseGovData.hasOwnProperty('partner_slider_id')? this.state.ExpertiseGovData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':''}
                    </div>
                    </DocumentMeta>


        )
    }
}
export default ExpertiseArticle;
