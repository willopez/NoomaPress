import React, { Component } from 'react';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import NavbarLink from '~/components/navbar-link';

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Navbar toggleable className="navbar navbar-light navbar-expand-md">
        <NavbarBrand className="masthead-brand" href="/">
          Project
        </NavbarBrand>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <Collapse
          className="justify-content-end"
          isOpen={this.state.isOpen}
          navbar
        >
          <Nav navbar className="nav-masthead">
            <NavbarLink title="HOME" href="/" />
            <NavbarLink title="ABOUT" href="/about" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
