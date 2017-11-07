import React, { Component } from 'react';
import logotrelo from './logo.png';
import logo from './logo.svg';
import './App.css';
import './sign_in.css';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';


const FormInstance = ()=>{
return(  
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
  </Form>)
}

const Sing_in =()=> {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <img src={logotrelo} className="App-logo" alt="logo" />
         <FormInstance/>
          <p className="App-title">Create new account</p>
        {/* </header> */}

      </div>
    );
  }

  export default Sing_in;