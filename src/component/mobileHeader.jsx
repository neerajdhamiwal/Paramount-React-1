
import React from 'react';
import $ from 'jquery';
import requestService from '../services/request.js';
import {Link} from 'react-router-dom'; // eslint-disable-line no-unused-vars



class MobHeader extends React.Component{
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
            <div className="off-canvas position-right" id="offCanvas" data-off-canvas>

                <button className="close-button" aria-label="Close menu" type="button" data-close="">
                    <span aria-hidden="true">&times;</span>
                </button>
                <nav className="main-menu show-for-small">
                             {this.state.menu.length>0? <ul className="menu align-start dropdown" data-dropdown-menu id="menu-tabs">
                        {
                                this.state.menu.map((obj, i)=> {
                                    if(obj.hasOwnProperty('below')) { //eslint-disable-next-line
                                        return <li key={'obj'+i} data-close=""><Link className={obj.relative==='/'?'cursorDefault':''} to={obj.relative!=='/'? `${obj.relative}`:""}>{obj.title}</Link>
                                            <ul className="menu dropdown-menu-an">
                                                {obj.below.map((subObj, i) => {  //eslint-disable-next-line
                                                    return <li data-close="" key={'subObj'+i}><Link className={subObj.relative==='/'?'cursorDefault':''} to={subObj.relative!=='/'? `${subObj.relative}`:""}>{subObj.title}</Link>
                                                        {subObj.hasOwnProperty('below')?
                                                            <ul className="menu dropdown-menu-an">
                                                                {subObj.below.map((subsubObj, i) => { //eslint-disable-next-line
                                                                    return <li data-close="" key={'subsubObj'+i}><Link className={subsubObj.relative==='/'?'cursorDefault':''} to={subsubObj.relative!=='/'? `${subsubObj.relative}`:""}>{subsubObj.title}</Link></li>
                                                                })}
                                                            </ul> : ''
                                                        }
                                                    </li>
                                                })}
                                            </ul>
                                        </li>
                                    }
                                    else{
                                        return <li data-close="" key={'obj'+i}><Link to={`/${obj.alias}`}>{obj.title}</Link></li>
                                    }
                                })
                            }
                        </ul>:'' }
                            </nav>

            </div>
        )
    }
}
export default MobHeader;
