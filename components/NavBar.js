import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

// Navbaren er ikke funksjonell, da det ikke er relevant for oppgaven valgte jeg å ikke bruke tid på det. Kun for designets skyld.

class NavBar extends Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Brand id="nav-header">
                    Lunaflick
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                          <span className="glyphicon glyphicon-shopping-cart"></span> Handlevogn
                        </NavItem>
                        <NavDropdown eventKey={3} title="Ludvik Lund" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1}>Min side</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.2}>Log out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;