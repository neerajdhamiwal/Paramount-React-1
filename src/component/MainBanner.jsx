
import React from 'react';
import bannerAwarBgImg from '../assets/img/award-banner-bg.png';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';

//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <section className="main-banner award-banner">
                <div className="grid-container">
                    <div className="grid-x align-right align-middle grid-margin-x">
                        <div className="medium-4 cell small-order-change">
                            <h3 className="banner-info"><span>{this.props.node[0].node_title}</span><br/>{this.props.node[0].node_subtitle_title}</h3>
                            {/*<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h6>*/}
                            <p>{$(this.props.node[0].node_description).text()}</p>
                        </div>
                        <div className="medium-6 cell">
                            <img src={bannerAwarBgImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Home;

