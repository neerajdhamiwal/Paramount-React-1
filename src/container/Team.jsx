
import React from 'react';
import Header from '../component/Header.jsx';
import FlipperBanner from '../component/FlipperBanner.jsx';
import MainBanner from '../component/MainBanner.jsx';
import BottomFlipBanner from '../component/BottomFlipBanner.jsx';
import Map from '../component/Map.jsx';
import AwardSlider from '../component/AwardsBottomSlider.jsx';
import CertSlider from '../component/CertificationBottomSlider.jsx';
import {customDivideData, apiUrl, jsonMiddleware} from '../services/common';
import requestService from '../services/request';

import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Team extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            teamData: {}
        }
    }
    componentWillMount(){
        requestService.getService(`/reach-us-data/${this.props.location.search.substring(this.props.location.search.indexOf("=")+1)}`)
            .then((response) => {
                let ids = ['map_id','award_id', 'certificate_id', 'team_member_id', 'content_ctaflip_id', 'node_flipper_id'];
                let data = jsonMiddleware(response.data, ids)
                this.setState({teamData: data});
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

              {this.state.teamData.hasOwnProperty('node_flipper_id')?<FlipperBanner nodeData={this.state.teamData['node_flipper_id'][0]}/>: Object.keys(this.state.teamData).length>0?<MainBanner node={this.state.teamData[Object.keys(this.state.teamData)[0]][0]}/>:''}
              {this.state.teamData.hasOwnProperty('team_member_id') ? <div className="grid-container">
                      {customDivideData(this.state.teamData['team_member_id'][0], 3).map((subArr) => {
                          return <div className="grid-x align-center block-latest-reads">
                              {subArr.map((obj) => {
                              return    <div className="medium-4 cell img-block">
                                          <div className="img ">
                                              <img src={apiUrl+obj.team_member_image}/>
                                          </div>
                                          <div className="img-content">
                                              <h6>{obj.team_member_name}</h6>
                                              <h2><a href="#">{obj.team_member_job} </a></h2>
                                          </div>
                                        </div>
                              })
                              }
                            </div>
                      })
                      }
              </div> :""}
              {this.state.teamData.hasOwnProperty('content_ctaflip_id')?<BottomFlipBanner nodeData={this.state.teamData['content_ctaflip_id'][0]}/>:''}
              <div className="clear"></div>
              {/*<section className="right-image-left-content top-100">*/}
                  {/*<div className="grid-container custom-grid custom-grid-right">*/}
                      {/*<div className="grid-x grid-padding-x height-750 pl-100 align-middle">*/}
                          {/*<div className="medium-6 cell small-order-change">*/}
                              {/*<div className="pr-155">*/}
                                  {/*<h2 className="relative-title title-one">Our Services</h2>*/}
                                  {/*<h3 className="heading-content ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>*/}
                                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                          {/*<div className="medium-6 cell no-padding">*/}
                              {/*<div className="img-relative-title-ld">*/}
                                  {/*<div className="grid">*/}

                                      {/*<a className="grid__item" href="#">*/}
                                          {/*<div className="box">*/}
                                              {/*<div className="box__shadow"></div>*/}
                                              {/*<img className="box__img" src="img/team-banner-bg.png" alt="Some image"/>*/}
                                          {/*</div>*/}
                                      {/*</a>*/}

                                  {/*</div>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              {/*</section>*/}
              <div className="clear"></div>
              {this.state.teamData.hasOwnProperty('map_id')? <Map mapData = {this.state.teamData['map_id'][0]}/>: ''}
              {this.state.teamData.hasOwnProperty('award_id')? <AwardSlider clientData = {this.state.teamData['award_id'][0]}/>: ''}
              {this.state.teamData.hasOwnProperty('certificate_id')? <CertSlider clientData = {this.state.teamData['certificate_id'][0]}/>: ''}

          </div>
        )
    }
}

export default Team;
