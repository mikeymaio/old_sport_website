import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from "react-router-dom";
import Landing from './Landing'
import About from './About';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <div className="page">
              <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/about' component={About}/>
                <Route path="*" render={() => <h3>No Content</h3>}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
