import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/Homepage.jsx';
import Expertise from './container/Expertise.jsx';
import Resource from './container/Resource.jsx';
import Team from './container/Team.jsx';
import Blog from './container/Blog.jsx';
import ArticlePage from './container/Articlepage.jsx';
import ExpertiseArt from './container/ExpertiseArticle.jsx';
import Awards from './container/Awards.jsx';
import Career from './container/Career.jsx';
import Main from './main';

class App extends React.Component{
    render(){
        return(
            <Main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resource" component={Resource} />
                        <Route exact path="/expertise" component={Expertise} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/casestudy/article" component={ArticlePage} />
                        <Route exact path="/exp-article" component={ExpertiseArt} />
                        <Route exact path="/awards" component={Awards} />
                        <Route exact path="/career" component={Career} />
                    </Switch>
                </BrowserRouter>
            </Main>
        )
    }
}
export default App;
