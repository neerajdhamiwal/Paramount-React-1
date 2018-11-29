
import React from 'react';
import socialCard from '../assets/img/socialcards.png';
class Footer extends React.Component{
    render(){
        return(
            <div>
            <footer class="footer-top bg-color-grey">
                <div class="grid-container">
                    <div class="grid-x footer-inner align-middle align-center ">
                        <div class="medium-4 cell">
                            <div class="footer-info">
                                <h5>Stay in touch</h5>
                                <p>With more than 100 global happy clients, and experience since 1997, we take pride in providing best-in-class IT services.</p>
                                <ul class="menu vertical">
                                    <li class="email">info@paramountsoft.net</li>
                                    <li class="address"><address>4030 Old Milton Parkway Alpharetta, GA 30005, USA</address></li>
                                    <li class="phone">770-857-8348</li>
                                </ul>
                            </div>
                        </div>
                        <div class="medium-5 cell">
                            <div class="form-wrapper">

                                <form class="contact-form">
                                    <div class="grid-container">
                                        <h5>Stay in touch</h5>
                                        <div class="grid-x">
                                            <div class="medium-12 cell">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                            <div class="medium-12 cell">
                                                <input type="email" placeholder="Email"/>
                                            </div>
                                            <div class="medium-12 cell">
                                                <textarea placeholder="Message" rows="5"></textarea>
                                            </div>
                                            <button class="button btn-full">Contact Us</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <footer class="footer-bottom full-bg-red">
            <div class="grid-container">
                <div class="grid-x footer-inner align-right">
                    <div class="medium-11 cell">
                        <div class="social-inner">
                            <h5>Latest happenings</h5>
                            <div class="grid-x grid-margin-x">
                                <div class="medium-4 cell"><img src={socialCard}/></div>
                                <div class="medium-4 cell"><img src={socialCard}/></div>
                                <div class="medium-4 cell"><img src={socialCard}/></div>
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

