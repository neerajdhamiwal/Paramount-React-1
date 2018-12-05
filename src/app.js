import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/Homepage';
import About from './container/About.jsx';
import Expertise from './container/Expertise.jsx';
import Resource from './container/Resource.jsx';
import Team from './container/Team.jsx';
import CaseStudy from './container/Casestudy.jsx';
import ArticlePage from './container/ArticlePage.jsx';
import Main from './main';

class App extends React.Component{
    render(){
        return(
            <Main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/resource" component={Resource} />
                        <Route exact path="/expertise" component={Expertise} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/casestudy" component={CaseStudy} />
                        <Route exact path="/casestudy2/article" component={ArticlePage} />
                    </Switch>
                </BrowserRouter>
            </Main>
        )
    }
}
export default App;
