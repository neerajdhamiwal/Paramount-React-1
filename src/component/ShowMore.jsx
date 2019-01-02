import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {imgPath, COUNT} from '../services/common.js';


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
        // console.log(nextProps);

    this.updateHeight();
    }
    updateHeight(){
        setTimeout(() => {
            console.log('this.props.id', this.props.id);
            const height = document.getElementById(this.props.id).clientHeight;
            console.log('height', height, this.props.id, $(`#${this.props.id}`)[0].clientHeight, document.getElementById(this.props.id).clientHeight);
            if(height< this.HIDDEN_HEIGHT){
                this.setState({maxHeight: height})
            }
            this.setState({showOptions: (height > (this.props.hiddenHeight || this.HIDDEN_HEIGHT))}, ()=> {
            });
        }, 300)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.update);
        this.updateHeight();
    }
    render(){
        return(
            <div>
                <div  style={{height: this.state.maxHeight, overflow: this.state.overflow}} className={this.props.update}>
                <p id={this.props.id}>{ReactHtmlParser(imgPath(this.props.longText))}</p>
                </div>
                {(() => {
                    if (this.state.showOptions) {
                        if (this.state.viewType === 1) {
                            return(
                                <a className="view-more" href="javascript:void(0)" onClick={() => this.setState({viewType: 2, maxHeight: '100%', overflow: 'visible'})}>View More..</a>
                            );
                        } else {
                            return(
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
