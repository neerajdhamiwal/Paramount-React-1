
import React from 'react';
import requestService from '../services/request.js';
import ReactHtmlParser from 'react-html-parser';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fb from '../assets/img/fb.png';
import ln from '../assets/img/linkedin.png';
import tw from '../assets/img/twitter.png';
import {imgPath} from '../services/common';

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            footerData: [],
            isDisable: false,
            tweets: []
    }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.ValidateEmail = this.ValidateEmail.bind(this);
    }

    componentWillMount(){
        requestService.getService('/stay-in-touch')
            .then((response) => {
                this.setState({footerData: response.data});
            })
            .catch((err) => {
                //console.log(err);
            })
        requestService.getService('/json-tweet')
            .then((response) => {
                this.setState({tweets: response.data});
            })
            .catch((err) => {
                //console.log(err);
            })
    }
    ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) //eslint-disable-line
        {
            return true
        }else{
            toast.error("Enter Valid Email", {
                position: toast.POSITION.TOP_RIGHT
            });
            return false
        }
    }

    submit(e){
        e.preventDefault();
        if(this.state.name && this.ValidateEmail && this.state.message){
            this.setState({isDisable: true})
            let postData = {
                "contact_form":[{"target_id":"feedback"}],
                "name":[{"value":this.state.name}],
                "mail":[{"value":this.state.email}],
                "subject":[{"value":"hello"}],
                "message":[{"value":this.state.message}]
            }
            requestService.postService('/contact_message?_format=json', postData)
                .then((res)=> {
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
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj);
    }

    render(){
        return(
          <div>
             <footer className="footer-top bg-color-grey">
              <div className="grid-container">
                <div className="grid-x footer-inner align-middle align-center ">
                  <div className="small-12 medium-4 cell small-order-change">
                    <div className="footer-info">
                        {this.state.footerData.length>0 ?ReactHtmlParser(imgPath(this.state.footerData[0].block_body)): ''}
                        <div>{ //eslint-disable-next-line
                        }<a className="cl-blue" href="https://www.facebook.com/ParamountSoftwareSolutionsInc/" target="blank"> <img src={fb} className="mr-8"/></a>
                            { //eslint-disable-next-line
                            }<a className="cl-blue" href="https://in.linkedin.com/company/paramount-software-solutions" target="blank"> <img src ={ln} className="mr-8"/></a>
                            { //eslint-disable-next-line
                            }<a className="cl-blue" href="https://twitter.com/paramountsoft" target="blank"> <img src={tw} className="mr-8"/></a>
                        </div>
                    </div>
                  </div>
                  <div className="small-12 medium-5 cell">
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
                        {(() => {
                            if (this.state.tweets.length>0) {
                                return (
                                    <div className="grid-x grid-margin-x twiter-update-footer">
                                        {this.state.tweets.map((tw, i) => {
                                            return (
                                                <TwitterTweetEmbed
                                                    key={i}
                                                    tweetId={tw}
                                                    options={{height: 200, width: 350, maxHeight: 300}}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            }
                        })()}
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
