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
        this.HIDDEN_HEIGHT = 563.2;
        this.state = {
            viewType: 1,
            showOptions: true,
            maxHeight: `${this.props.hiddenHeight || this.HIDDEN_HEIGHT}px`,
            overflow: 'hidden'
        };
    }

    componentDidMount() {
        // console.log(nextProps);
        const height = document.getElementById(this.props.id).clientHeight;
        console.log('height', height, this.props.id);
        this.setState({showOptions: (height > (this.props.hiddenHeight || this.HIDDEN_HEIGHT))}, ()=> {
        });
    }

    render(){
        return(
            <div id={this.props.id}>
                <p style={{maxHeight: this.state.maxHeight, overflow: this.state.overflow}}>{ReactHtmlParser(imgPath(this.props.longText))}</p>
                {(() => {
                    if (this.state.showOptions) {
                        if (this.state.viewType === 1) {
                            return(
                                <a href="javascript:void(0)" onClick={() => this.setState({viewType: 2, maxHeight: '100%', overflow: 'visible'})}>View More..</a>
                            );
                        } else {
                            return(
                                <a href="javascript:void(0)" onClick={() => this.setState({viewType: 1, maxHeight: `${this.props.hiddenHeight || this.HIDDEN_HEIGHT}px`, overflow: 'hidden'})}>View Less..</a>
                            );
                        }
                    }
                })()}
            </div>
        );
    }
}

export default ShowMore;
