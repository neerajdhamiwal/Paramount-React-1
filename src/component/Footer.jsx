
import React from 'react';
import requestService from '../services/request.js';
import ReactHtmlParser from 'react-html-parser';
import {TwitterTweetEmbed, TwitterTimelineEmbed} from 'react-twitter-embed';



class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            footerData: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        requestService.getService('/stay-in-touch')
            .then((response) => {
            console.log(response.data);
                this.setState({footerData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    submit(){

    }

    handleChange(e){
        console.log(e.target.value, this.state);
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj);
    }

    onLoadTweet(){
        console.log('tweet load');
    }
    render(){
        return(
          <div>
             <footer className="footer-top bg-color-grey">
              <div className="grid-container">
                <div className="grid-x footer-inner align-middle align-center ">
                  <div className="medium-4 cell">
                    <div className="footer-info">
                        {this.state.footerData.length>0 ?ReactHtmlParser(this.state.footerData[0].block_body): ''}

                    </div>
                  </div>
                  <div className="medium-5 cell">
                    <div className="form-wrapper">

                      <form className="contact-form">
                        <div className="grid-container">
                                        <h5>{this.state.footerData.length>0?ReactHtmlParser(this.state.footerData[0].block_title):''}</h5>
                          <div className="grid-x">
                            <div className="medium-12 cell">
                                <input type="text" placeholder="Name" name = "name" onChange = {this.handleChange} required/>
                            </div>
                            <div className="medium-12 cell">
                                <input type="email" placeholder="Email"  name = "email" onChange = {this.handleChange} required/>
                            </div>
                            <div className="medium-12 cell">
                                <textarea placeholder="Message" rows="5"  name="message" onChange = {this.handleChange}></textarea>
                            </div>
                            <button className="button btn-full" onClick={this.submit.bind()}>Contact Us</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <footer className="footer-bottom full-bg-red">
              <div className="grid-container">
                <div className="grid-x footer-inner align-right">
                  <div className="medium-11 cell">
                    <div className="social-inner">
                      <h5>Latest happenings</h5>
                      <div className="grid-x grid-margin-x">
                          <TwitterTimelineEmbed
                              sourceType="profile"
                              screenName="opensenselabs"
                              options={{height: 400}}
                              noScrollbar="true"
                          />
                          {/*<TwitterTweetEmbed   tweetId={'1072590849014419456'}/>*/}
                        {/*<TwitterTweetEmbed   tweetId={'1072516104419864576'}/>*/}
                        {/*<div className="medium-4 cell"><img src={require('../assets/img/socialcards.png')} alt="Social Card" /></div>*/}
                        {/*<div className="medium-4 cell"><img src={require('../assets/img/socialcards.png')} alt="Social Card" /></div>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            </div>
        )
    }
}
export default Footer;
