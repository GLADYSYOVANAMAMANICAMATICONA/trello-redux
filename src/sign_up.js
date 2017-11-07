import React, { Component } from 'react';
// import './SignUp.css';
import logotrelo from './logo.png';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from "redux-zero/react";
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


const Sign_up =()=> {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <img src={logotrelo} className="App-logo" alt="logo" />
          <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="text" placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="text" placeholder="Lastname" />
          </Col>
        </FormGroup>

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

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={10}>
            <FormControl type="password" placeholder="Confirm Password" />
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
          <NavLink to="/board"><input type="submit" value="Sign up" class="btn btn-primary pull-right" /></NavLink>
          
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>)
          <p className="App-title">Create new account</p>
        {/* </header> */}

      </div>
    );
  }
  const mapToProps = ({ card}) => ({ card });
  export default connect(mapToProps)(Sign_up);