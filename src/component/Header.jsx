
import React from 'react';
import Logo from '../assets/img/logo.png';
import $ from 'jquery';
import requestService from '../services/request.js';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: []
        }
    }
    componentWillMount(){
        requestService.getService(`/api/menu_items/paramount-main-menu?_format=json`)
            .then((response) => {
                this.setState({menu :response.data},()=> {
                    $(document).foundation();
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    componentDidMount(){
        $('#menu-tabs').on('click', 'li', function() {
            $('#menu-tabs li.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }
    render(){
        return(
            <header>
                <div className="grid-container">
                    <div className="grid-x header-inner align-middle">
                        <div className="medium-4 small-6 cell"><h1><a href="/"><img src={Logo} alt="Paramount Software Solution" /></a></h1></div>
                        <div className="medium-8  small-6 cell text-right">
                            <button className="menu-icon" type="button" data-toggle="offCanvas"></button>
                            <nav className="main-menu show-for-medium">
                                {this.state.menu.length>0?<ul className="menu align-right dropdown" data-dropdown-menu id="menu-tabs">
                                    {
                                        this.state.menu.map((obj, i)=> {
                                            if(obj.hasOwnProperty('below')) { //eslint-disable-next-line
                                                return <li key={'obj'+i}><a className={obj.relative==='/'?'cursorDefault':''} href={obj.relative!=='/'? `${obj.relative}`:"javascript:void(0);"}>{obj.title}</a>
                                                    <ul className="menu dropdown-menu-an">
                                                        {obj.below.map((subObj, i) => {  //eslint-disable-next-line
                                                            return <li key={'subObj'+i}><a className={subObj.relative==='/'?'cursorDefault':''} href={subObj.relative!=='/'? `${subObj.relative}`:"javascript:void(0);"}>{subObj.title}</a>
                                                                {subObj.hasOwnProperty('below')?
                                                                    <ul className="menu dropdown-menu-an">
                                                                        {subObj.below.map((subsubObj, i) => { //eslint-disable-next-line
                                                                            return <li key={'subsubObj'+i}><a className={subsubObj.relative==='/'?'cursorDefault':''} href={subsubObj.relative!=='/'? `${subsubObj.relative}`:"javascript:void(0);"}>{subsubObj.title}</a></li>
                                                                        })}
                                                                    </ul> : ''
                                                                }
                                                            </li>
                                                        })}
                                                    </ul>
                                                </li>
                                            }
                                            else{
                                                return <li key={'obj'+i}><a href={`/${obj.alias}`}>{obj.title}</a></li>
                                            }
                                        })
                                    }
                                </ul>:'' }
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
