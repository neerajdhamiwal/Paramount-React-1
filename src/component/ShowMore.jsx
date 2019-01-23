import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {imgPath} from '../services/common.js';


/**
 * Props:
 * 1. hiddenHeight: Height of initial para. Default 300px.
 * 2. longText: Actual text content.
 * 3. id: required.
 */
class ShowMore extends React.Component {
    constructor(props){
        super(props);
        this.HIDDEN_HEIGHT = 422;
        this.state = {
            viewType: 1,
            showOptions: true,
            maxHeight: `${this.props.hiddenHeight || this.HIDDEN_HEIGHT}px`,
            overflow: 'hidden'
        };
        this.updateHeight = this.updateHeight.bind(this);
    }

    componentDidMount() {
    this.updateHeight();
    }
    updateHeight(){
        setTimeout(() => {
            const height = document.getElementById(this.props.id).clientHeight;
            if(this.props.update){
                if(height!==0 && height< this.HIDDEN_HEIGHT){
                    this.setState({maxHeight: height})
                }
            }else{
                if(height< this.HIDDEN_HEIGHT){
                    this.setState({maxHeight: height})
                }
            }
            this.setState({showOptions: (height > (this.props.hiddenHeight || this.HIDDEN_HEIGHT))}, ()=> {
            });
        }, 300)
    }
    componentWillReceiveProps(nextProps){
        this.updateHeight();
    }
    render(){
        return(
            <div>
                <div  style={{height: this.state.maxHeight, overflow: this.state.overflow}} className={`${this.props.update}`}>
                <p id={this.props.id}>{ReactHtmlParser(imgPath(this.props.longText))}</p>
                </div>
                {(() => {
                    if (this.state.showOptions) {
                        if (this.state.viewType === 1) {
                            return(
                                 //eslint-disable-next-line
                                <a className="view-more" href="javascript:void(0)" onClick={() => this.setState({viewType: 2, maxHeight: '100%', overflow: 'visible'})}>View More..</a>
                            );
                        } else {
                            return(
                                 //eslint-disable-next-line
                                <a className="view-more" href="javascript:void(0)" onClick={() => this.setState({viewType: 1, maxHeight: `${this.props.hiddenHeight || this.HIDDEN_HEIGHT}px`, overflow: 'hidden'})}>View Less..</a>
                            );
                        }
                    }
                })()}
            </div>
        );
    }
}

export default ShowMore;
