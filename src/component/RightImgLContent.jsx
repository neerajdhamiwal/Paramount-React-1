
import React from 'react';
import Layertop from '../assets/img/layertop.png'
class RightImgLContent extends React.Component{
    render(){
        return(
             // left-image-right-content Section Starts Here
        <section class="left-image-right-content top-100 bottom-100">
            <div class="grid-container custom-grid custom-grid-right">
                <div class="grid-x grid-padding-x height-750 align-middle">
                    <div class="medium-4 cell">
                        <h2 class="relative-title">Our Services</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="medium-7 cell no-padding">
                        <div class="img-relative-title-ld">
                            <div class="grid">
                                <a class="grid__item" href="#">
                                    <div class="box">
                                        <div class="box__shadow"></div>
                                        <img class="box__img" src={Layertop} alt="Some image"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         // left-image-right-content Section Ends Here
        )
    }
}
export default RightImgLContent;

