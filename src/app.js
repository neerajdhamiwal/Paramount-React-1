import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/Homepage.jsx';
import About from './container/About.jsx';
import Expertise from './container/Expertise.jsx';
import Resource from './container/Resource.jsx';
import Team from './container/Team.jsx';
import CaseStudy from './container/Casestudy.jsx';
import ArticlePage from './container/Articlepage.jsx';
import Contact from './container/Contact.jsx';
import ExpertiseArt from './container/ExpertiseArticle.jsx';
import Service from './container/Service.jsx';
import Main from './main';

class App extends React.Component{
    render(){
        return(
            <Main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/service" component={Service} />
                        <Route exact path="/resource" component={Resource} />
                        <Route exact path="/expertise" component={Expertise} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/casestudy" component={CaseStudy} />
                        <Route exact path="/casestudy/article" component={ArticlePage} />
                        <Route exact path="/contact-us" component={Contact} />
                        <Route exact path="/exp-article" component={ExpertiseArt} />
                    </Switch>
                </BrowserRouter>
            </Main>
        )
    }
}
export default App;
