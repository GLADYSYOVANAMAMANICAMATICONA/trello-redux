import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import logotrelo from './logo.png';
import logo from './logo.svg';
import './App.css';
import './sign_in.css';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



const Sign_in = () => {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <img src={logotrelo} className="App-logo" alt="logo" />
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
        </Button>
          </Col>
        </FormGroup>
      </Form>
      <NavLink to="/Sign_up">
 Create new account
 </NavLink>


    </div>
  );
}

const mapToProps = ({ card }) => ({ card });
export default connect(mapToProps)(Sign_in);