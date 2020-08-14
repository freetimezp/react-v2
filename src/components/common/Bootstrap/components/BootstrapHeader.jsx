import React from 'react';

import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import logo from '../logo192.png';

import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";

const BootstrapHeader = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/bootstrap">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            style={{width: 30}}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/bootstrap/home">Home</Nav.Link>
                            <Nav.Link href="/bootstrap/about">About us</Nav.Link>
                            <Nav.Link href="/bootstrap/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/bootstrap/blog">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/bootstrap/home" component={Home}/>
                    <Route exact path="/bootstrap/about" component={About}/>
                    <Route exact path="/bootstrap/contacts" component={Contacts}/>
                    <Route exact path="/bootstrap/blog" component={Blog}/>
                </Switch>
            </Router>
        </div>
    );
}

export default BootstrapHeader;