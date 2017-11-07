import React, { Component } from 'react';
import Logo from './logo.png'
import { connect } from "redux-zero/react";
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, Grid, Row } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';

const Task = () => {
    return (
        <div className="taskContainer">
            <input placeholder="Add a new list ..." />
            <Grid>
                <Row>
                    <Col md={6}>
                        <button id="btnSave">Save</button><p className="text--center">or<a>Cancel</a></p>
                    </Col>
                    <Col md={6}>
                        <p className="text--center"><a>Cancel</a></p>
                    </Col>
                </Row>
            </Grid>
            <div></div>
        </div>
    );
}

const Add = ({ Add }) => {
    return (
        <div className="contenedor" id="contenedorGeneral">
            <div id="cajitas" className="d-inlineblock">
                <button id="btnAddList" onClick={(e) => { Add(e) }}>Add List</button>
            </div>
            <Task />
        </div>
    );
}

const Board = () => {
    return (
        <div>
            <Add />
        </div>
    );
}

const mapToProps = ({ card }) => ({ card });
export default connect(mapToProps)(Board);