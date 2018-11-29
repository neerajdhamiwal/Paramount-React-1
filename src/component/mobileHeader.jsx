
import React from 'react';
import socialCard from '../assets/img/socialcards.png';
class MobHeader extends React.Component{
    render(){
        return(
            <div className="off-canvas position-right" id="offCanvas" data-off-canvas>

                <button className="close-button" aria-label="Close menu" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>

                <ul className="vertical menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Expertise</a></li>
                </ul>

            </div>
        )
    }
}
export default MobHeader;

