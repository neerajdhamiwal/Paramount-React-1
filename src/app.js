import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './container/Homepage';
import About from './container/About.jsx';
import Expertise from './container/Expertise.jsx';
import Resource from './container/Resource.jsx';
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
                    </Switch>
                </BrowserRouter>
            </Main>

        )
    }
}
export default App;
