import React from 'react';
import FooterHeading from '../component/FooterHeading.jsx';
import FooterSecndHeading from '../component/FooterSecndHeading.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import AwardBanner from '../component/AwardBanner.jsx';
import {jsonMiddleware, urlString} from '../services/common';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import WOW from 'wowjs';
import $ from 'jquery';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import TextContent from '../component/TextContent.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import PartnerSlider from '../component/PartnerSlider.jsx';
import GridList from '../component/GridList.jsx';
import FooterRowSlider from '../component/FooterRowSlider.jsx';

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
        requestService.getService(`/services-node-data/${urlString[this.props.location.pathname]}`)
            .then((response) => {
                let ids = ['img_des_id','sub_block_id', 'secondary_sub_block_id','secondary_img_des_id', 'extra_content_id', 'award_slider_id', 'certificate_slider_id','partner_slider_id','client_slider_id'];
                this.setState({loading: false});
                nid = urlString[this.props.location.pathname];
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
                <div className=" clearfix"></div>
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
                 {this.state.ExpertiseGovData.hasOwnProperty('extra_content_id')? this.state.ExpertiseGovData['extra_content_id'][0].map((obj, i) => {
                     if(nid == 24){
                         return <div><TextContent data = {obj}/>
                             {i==0? this.state.ExpertiseGovData.hasOwnProperty('award_slider_id')?this.state.ExpertiseGovData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':'':''}
                             {i==2? this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':'':''}
                             {i==4? this.state.ExpertiseGovData.hasOwnProperty('certificate_slider_id')?this.state.ExpertiseGovData['certificate_slider_id'][0][0].certificate_slider_id? <CertSlider/>: '':'':''}
                         </div>
                     }
                     else if(nid==39){
                         return <div><TextContent data = {obj}/>
                             {i==0? this.state.ExpertiseGovData.hasOwnProperty('award_slider_id')?this.state.ExpertiseGovData['award_slider_id'][0][0].award_slider_id? <AwardSlider/>: '':'':''}
                             {i==1? this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':'':''}
                             {/*{i==4? this.state.ExpertiseGovData.hasOwnProperty('certificate_slider_id')?this.state.ExpertiseGovData['certificate_slider_id'][0][0].certificate_slider_id? <CertSlider/>: '':'':''}*/}
                         </div>
                     }

                     }) :''}
                 {
                     this.state.ExpertiseGovData.hasOwnProperty('secondary_img_des_id')? this.state.ExpertiseGovData['img_des_id'][0].map((obj, i) => {
                             if ((i + 1) % 2 === 0) {
                                 return <RightImgLContent data={obj} secondary = "true"/>
                             }
                             else {
                                 return <LeftImgRContent data={obj} secondary = "true"/>

                             }
                         }): ''
                 }
                 {nid== 24?this.state.ExpertiseGovData.hasOwnProperty('partner_slider_id')? this.state.ExpertiseGovData['partner_slider_id'][0][0].partner_slider_id ? <PartnerSlider/>: '':'':''}
                 {/*{this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}*/}
                 {/*{this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}*/}
                 {/*{this.state.ExpertiseGovData.hasOwnProperty('client_slider_id')? this.state.ExpertiseGovData['client_slider_id'][0][0].client_slider_id ? <FooterRowSlider/>: '':''}*/}
             </div>
        )
    }
}
export default ExpertiseArticle;
