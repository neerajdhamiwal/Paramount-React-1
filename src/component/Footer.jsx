
import React from 'react';
import requestService from '../services/request.js';
import ReactHtmlParser from 'react-html-parser';
import {TwitterTweetEmbed, TwitterTimelineEmbed} from 'react-twitter-embed';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fb from '../assets/img/fb.png';
import ln from '../assets/img/linkedin.png';
import tw from '../assets/img/twitter.png';

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            footerData: [],
            isDisable: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentWillMount(){
        requestService.getService('/stay-in-touch')
            .then((response) => {
                this.setState({footerData: response.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    submit(e){
        this.setState({isDisable: true})
        e.preventDefault();
        if(this.state.name && this.state.email && this.state.message){
            let postData = {
                "contact_form":[{"target_id":"feedback"}],
                "name":[{"value":this.state.name}],
                "mail":[{"value":this.state.email}],
                "subject":[{"value":"hello"}],
                "message":[{"value":this.state.message}]
            }
            requestService.postService('/contact_message?_format=json', postData)
                .then((res)=> {
                console.log('successful');
                    toast.success("Successfully Submit Form", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.setState({name:'', email: '', message:''})
                    this.setState({isDisable: false})

                })
                .catch(()=> {
                    toast.error("There is some internal issue !", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
        }
        else{
            toast.error("Enter All Required Field Value !", {
                position: toast.POSITION.TOP_RIGHT
            });            // alert('Enter All Required Field Value');
        }
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
                  <div className="medium-4 cell small-order-change">
                    <div className="footer-info">
                        {this.state.footerData.length>0 ?ReactHtmlParser(this.state.footerData[0].block_body): ''}
                        <div>
                            <a className="cl-blue" href="https://www.facebook.com/ParamountSoftwareSolutionsInc/"> <img src={fb} className="mr-8"/></a>
                            <a className="cl-blue" href="https://in.linkedin.com/company/paramount-software-solutions"> <img src ={ln} className="mr-8"/></a>
                            <a className="cl-blue" href="https://twitter.com/paramountsoft"> <img src={tw} className="mr-8"/></a>
                        </div>
                    </div>
                  </div>
                  <div className="medium-5 cell">
                    <div className="form-wrapper">
                      <form className="contact-form">
                        <div className="grid-container">
                            <h5>{this.state.footerData.length>0?ReactHtmlParser(this.state.footerData[0].block_title):''}</h5>
                          <div className="grid-x">
                            <div className="medium-12 cell">
                                <input type="text" placeholder="Name" value={this.state.name} name = "name" onChange = {this.handleChange} required/>
                            </div>
                            <div className="medium-12 cell">
                                <input type="email" placeholder="Email" value={this.state.email} name = "email" onChange = {this.handleChange} required/>
                            </div>
                            <div className="medium-12 cell">
                                <textarea placeholder="Message" rows="5" value={this.state.message} name="message" onChange = {this.handleChange}></textarea>
                            </div>
                            <button className="button btn-full" disabled={this.state.isDisable} onClick={this.submit}>Contact Us</button>
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
                      <div className="grid-x grid-margin-x twiter-update-footer">
                          <TwitterTimelineEmbed
                              sourceType="profile"
                              screenName="paramount"
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
              <ToastContainer />
          </div>
        )
    }
}
export default Footer;
