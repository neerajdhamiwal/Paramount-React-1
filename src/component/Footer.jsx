
import React from 'react';

class Footer extends React.Component{
    render(){
        return(
          <div>
             <footer className="footer-top bg-color-grey">
              <div className="grid-container">
                <div className="grid-x footer-inner align-middle align-center ">
                  <div className="medium-4 cell">
                    <div className="footer-info">
                      <h5>Stay in touch</h5>
                      <p>With more than 100 global happy clients, and experience since 1997, we take pride in providing best-in-className IT services.</p>
                      <ul className="menu vertical">
                        <li className="email">info@paramountsoft.net</li>
                        <li className="address"><address>4030 Old Milton Parkway Alpharetta, GA 30005, USA</address></li>
                        <li className="phone">770-857-8348</li>
                      </ul>
                    </div>
                  </div>
                  <div className="medium-5 cell">
                    <div className="form-wrapper">

                      <form className="contact-form">
                        <div className="grid-container">
                                        <h5>Stay in touch</h5>
                          <div className="grid-x">
                            <div className="medium-12 cell">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="medium-12 cell">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="medium-12 cell">
                                <textarea placeholder="Message" rows="5"></textarea>
                            </div>
                            <button className="button btn-full">Contact Us</button>
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
                        <div className="medium-4 cell"><img src={require('../assets/img/socialcards.png')} alt="Social Card" /></div>
                        <div className="medium-4 cell"><img src={require('../assets/img/socialcards.png')} alt="Social Card" /></div>
                        <div className="medium-4 cell"><img src={require('../assets/img/socialcards.png')} alt="Social Card" /></div>
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
