import React from 'react';
import {Route, Redirect} from 'react-router-dom';// eslint-disable-line no-unused-vars
import Home from './container/Homepage'
class App extends React.Component{
    render(){
        return(
            <div className="app">
                <div className="App-intro">
                    <Route path='/home' exact component={Home} />
                    <Route path='/next' component={Home} />
                    <Redirect to='/home' />
                </div>
            </div>
        )
    }
}
export default App;
