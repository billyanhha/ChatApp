import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}  ></Route>
            <PrivateRoute exact path="/home" component={Home}  ></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}




export default (App);