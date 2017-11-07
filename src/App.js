import React, { Component } from 'react';
import Sign_in from './sign_in';
import Sign_up from './sign_up';
import Board from './board';
import { connect } from "redux-zero/react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

const App = ({ ruteo }) => {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route path="/sign"
            render={() => <Redirect to={'/'} />} />
          <Route path="/sign_in" render={() => <Sign_in />} />
          <Route path="/sign_up" render={() => <Sign_up />} />
          <Route path="/board" render={() => <Board />} />
          <Route component={Sign_in} />
        </Switch>
      </div>
    </BrowserRouter>)
}

const mapToProps = ({ ruteo }) => ({ ruteo });

export default connect(mapToProps)(App);