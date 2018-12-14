
import React from 'react';
import img4 from '../assets/img/img4.png';
import $ from 'jquery';
import Loader from 'react-loader-spinner'; // eslint-disable-line no-unused-vars
import GridListScnd from '../component/GridListScnd.jsx';
import Blog from '../container/Blog.jsx';
import requestService from '../services/request.js';
import {apiUrl, jsonMiddleware} from '../services/common.js';


//import 'foundation/js/vendor/zepto';
class Resource extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true,
            caseData:[],
            blogData:[],
            infoData:[],
        }
        this.getRequest = this.getRequest.bind(this);
    }
    getRequest(){
        let caseData = [];
        requestService.getService('/latest-case-study-data')
            .then((response) => {
                let ids = ['id'];
                let data = jsonMiddleware(response.data, ids);
                this.setState({caseData:data})
            })
            .catch((err) => {
                console.log(err);
            });
        requestService.getService('/latest-blogs-data')
            .then((response) => {
                let ids = ['nid'];
                let data = jsonMiddleware(response.data, ids);
                this.setState({blogData: data})
            })
            .catch((err) => {
                console.log(err);
            });
        requestService.getService('/infographics-data')
            .then((response) => {
                this.setState({loading: false});
                this.setState({infoData: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentWillMount(){
        this.getRequest();
    }
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }

    render(){
        return(
            <div>
                <div className="grid-container pl-155 pr-155 pt-50">
                    {this.state.blogData.hasOwnProperty('nid')?<GridListScnd data={this.state.blogData['nid'][0]}/>:''}
                    {this.state.caseData.hasOwnProperty('id')?<GridListScnd data={this.state.caseData['id'][0]}/>:''}
                    {/*<GridListScnd data={this.state.infoData[0]}/>*/}
                </div>
                {/*<AccordionTab/>*/}
                <Blog locate="resource" page="casestudy"/>
            </div>
        )
    }
}
export default Resource;

