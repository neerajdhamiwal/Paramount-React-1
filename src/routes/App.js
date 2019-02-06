import React from 'react';
import { Switch, Route } from 'react-router';
import {Redirect } from 'react-router-dom';
import Home from '../container/Homepage.jsx';
import Expertise from '../container/Expertise.jsx';
import Resource from '../container/Resource.jsx';
import Team from '../container/Team.jsx';
import Blog from '../container/Blog.jsx';
import ArticlePage from '../container/Articlepage.jsx';
import ExpertiseArt from '../container/ExpertiseArticle.jsx';
import Awards from '../container/Awards.jsx';
import Career from '../container/Career.jsx';
import CaseStudy from '../container/CaseStudyLanding.jsx';
import InfographicArt from '../container/InfographicArticle.jsx';
import Infographic from '../container/Infographic.jsx';
import Notfound from '../container/Notfound.jsx';
import Main from '../main';
import requestService from '../services/request';
const  UrlContent = {"Reach us Page":Team, "Service Node Page": ExpertiseArt, "Homepage": Home, "Landing Page":Expertise, "Reinforcement Page": Awards, "Infographics Page": InfographicArt, "Case Study": CaseStudy, "Blogs": ArticlePage};
class App extends React.Component{
    constructor() {
        super();
        this.state = {url :[], redirectLink:[]};
    }
    componentWillMount(){
        requestService.getService(`/url-pattern-data`)
            .then((response) => {
                this.setState({url :this.addComponent(response.data)});
            })
            .catch((err) => {
                console.log(err);
            })
        requestService.getService(`/redirect-link`)
            .then((response) => {
                this.setState({redirectLink : response.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    addComponent(data){
        data.forEach((obj)=>{
            obj.Component = UrlContent[obj.type];
        })
        return data;
    }
    render(){
        return(
            <Main>
                <Switch>
                  <Route exact path="/" render={() => <Home nid={50}/>} />
                  <Route exact path="/resources" component={Resource} />
                  <Route exact path="/resources/blogs" component={Blog} />
                  <Route exact path="/resources/case-studies" component={CaseStudy} />
                  <Route exact path="/resources/infographics" component={Infographic} />
                    { //eslint-disable-next-line
                        this.state.url.map((obj, i) => {
                            if (obj.view_node_1 === '/careers') {
                                return <Route key={i} exact path="/careers" render={() => <Career nid={obj.nid}/>}/>
                            } else {
                                if (obj.Component !== undefined) {
                                    return <Route key={i} exact path={obj.view_node_1}
                                                  render={() => <obj.Component nid={obj.nid}/>}/>
                                }
                            }
                        })}
                    {
                            this.state.redirectLink.map((obj, i) => {
                                    return <Redirect key={i} path = {obj.from} to = {obj.to}/>
                                }
                            )}
                    <Route path="*" component={Notfound}/>
                </Switch>
            </Main>
        )
    }
}
export default App;
