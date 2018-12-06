import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import placeholderImg from '../assets/img/placeholder.png';
import Placeholder2 from '../assets/img/placeholder2.png';
import requestService from '../services/request.js';
import {apiUrl} from '../services/common.js';
import $ from 'jquery';
class TagLinks extends React.Component{


    render(){
        return(
          <section className="category-link left-image-right-content">
        <div className="grid-container  custom-grid custom-grid-right">
          <div className="grid-x">
            <div className="medium-2 cell">
              <ul className="vertical menu">
                <li><a href="#" className="is-active">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
                <li><a href="#">Four</a></li>
              </ul>
            </div>
            <div className="medium-10 cell">

              <div className="grid-x grid-padding-x">
                <div className="medium-5 cell">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                  <p className="ptb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.</p>
                  <button className="button">Read more</button>
                </div>
                <div className="medium-7 cell no-padding">
                  <div className="img-relative-title-ld">
                    <h2 className="relative-title">Case Study1</h2>
                    <img src={Placeholder2} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
        )
    }
}
export default TagLinks;
