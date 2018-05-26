import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from "react-router-dom";
import {ParallaxProvider} from 'react-scroll-parallax';
import {routeCodes} from "../route_codes";
import Landing from './Landing'
import Header from '../components/shared/Header';
import logo from '../logo.svg';
import '../styles/App.css';

function PublicRoute({
  component: Component,
  authenticated,
  user,
  from,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
      return !authenticated
        ? (<Component {...props}/>)
        : (<Redirect to={from || `/${user.id}/dashboard`}/>);
    }}/>
  );
}

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <BrowserRouter>
          <div className="app">
            <Header/>
            <div className="page">
              <Switch>
                <PublicRoute path={routeCodes.Landing} component={Landing}/>
                <Route path="*" render={() => <h3>No Content</h3>}/>
              </Switch>
            </div>
            {/* <Footer/> */}
          </div>
        </BrowserRouter>
      </ParallaxProvider>
    );
  }
}

export default App;
