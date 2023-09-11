import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "..";
import "./style.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function Navigation() {
  const {user} = useContext(Context);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <NavLink className="navlink" to={"/shop"}>BuyDevice</NavLink>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav">
          <Button>Authorization</Button>
          <Button>Admin Panel</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;
