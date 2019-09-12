import React from 'react';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/es/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import logo from "../../logo.svg";

export const Header = (props) => {
  return(
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="#home">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <NavbarToggle aria-controls="responsive-navbar-nav"/>
      <NavbarCollapse>
        <Nav className="header">

        </Nav>
      </NavbarCollapse>
    </Navbar>
  )
};