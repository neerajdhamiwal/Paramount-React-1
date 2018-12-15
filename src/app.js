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
import CaseStudy from './container/CaseStudyLanding.jsx';
import InfographicArt from './container/InfographicArticle.jsx';
import Infographic from './container/Infographic.jsx';
import Main from './main';

class App extends React.Component{
    render(){
        return(
            <Main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resources" component={Resource} />
                        <Route exact path="/expertise" component={Expertise} />
                        <Route exact path="/about-paramount" component={Expertise}/>
                        <Route exact path="/services/paramount techadvisory/infrastructure management-and-monitoring" component={Expertise}/>
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/contact" component={Team} />
                        <Route exact path="/resources/blogs" component={Blog} />
                        <Route exact path="/casestudy/article" component={ArticlePage} />
                        <Route exact path="/exp-article" component={ExpertiseArt} />
                        <Route exact path="/expertise/technologies" component={ExpertiseArt} />
                        <Route exact path="/expertise/government-solutions" component={ExpertiseArt} />
                        <Route exact path="/services/paramount-edge" component={ExpertiseArt} />
                        <Route exact path="/services/paramount-tech-exec" component={ExpertiseArt} />
                        <Route exact path="/services/paramount techadvisory/cms-and-app-development" component={ExpertiseArt} />
                        <Route exact path="/services/paramount techadvisory/application-maintenance-development-integration" component={ExpertiseArt} />
                        <Route exact path="/awards" component={Awards} />
                        <Route exact path="/about-paramount/community" component={Awards} />
                        <Route exact path="/about-paramount/awards-and-certifications" component={Awards} />
                        <Route exact path="/careers" component={Career} />
                        <Route exact path="/resources/case studies" component={CaseStudy} />
                        <Route exact path="/infographic" component={Infographic} />
                        <Route exact path="/infographic-article" component={InfographicArt} />
                    </Switch>
                </BrowserRouter>
            </Main>
        )
    }
}
export default App;
