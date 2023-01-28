import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="light" light>
        <Container className="d-flex">
          <NavbarBrand href="/">E-Commerce</NavbarBrand>
          <Nav className="ms-auto d-flex flex-row" navbar>
            <NavItem className="px-3">
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="auth/register">Sign Up</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="auth/login">
                <Button color="primary">Login</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
