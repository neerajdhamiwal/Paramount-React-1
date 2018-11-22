
import React from 'react';
class LeftMenu extends React.Component{
    render(){
        return(
            <div className="off-canvas position-right" id="offCanvas" data-off-canvas>

                {/*<!-- Close button -->*/}
                <button className="close-button" aria-label="Close menu" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>

                {/*// Menu*/}
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
export default LeftMenu;

