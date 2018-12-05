
import React from 'react';
import Logo from '../assets/img/logo.png';


class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('this.props',this.props);
        return(
            <header>
                <div className="grid-container">
                    <div className="grid-x header-inner align-middle">
                        <div className="medium-4 small-6 cell"><h1><a href="/"><img src={Logo} alt="Paramount Software Solution" /></a></h1></div>
                        <div className="medium-8  small-6 cell text-right">
                            <button className="menu-icon" type="button" data-toggle="offCanvas"></button>
                            <nav className="main-menu show-for-medium">
                                <ul className="menu align-right">
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="/resource">Resources</a></li>
                                    <li><a href="/expertise">Expertise</a></li>
                                    <li><a href="/team">Team</a></li>
                                    <li><a href="/casestudy">Case Study</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
