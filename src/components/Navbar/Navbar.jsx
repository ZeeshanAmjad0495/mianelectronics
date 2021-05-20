import React from 'react';
import {
  Navbar as BSNavbar,
  Nav as BSNav,
  NavDropdown as BSNavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.scss';

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg">
      <BSNavbar.Brand href="/homepage">MIAN ELECTRONICS</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-BSBSNavbar-BSNav" />
      <BSNavbar.Collapse id="basic-BSBSNavbar-BSNav">
        <BSNav className="mr-auto">
          <BSNav.Link href="/homepage">Home</BSNav.Link>
          <BSNav.Link href="/cart">Cart</BSNav.Link>
          <BSNavDropdown title="Dropdown" id="basic-BSNav-dropdown">
            <BSNavDropdown.Item href="#action/3.1">Action</BSNavDropdown.Item>
            <BSNavDropdown.Item href="#action/3.2">
              Another action
            </BSNavDropdown.Item>
            <BSNavDropdown.Item href="#action/3.3">
              Something
            </BSNavDropdown.Item>
            <BSNavDropdown.Divider />
            <BSNavDropdown.Item href="#action/3.4">
              Separated link
            </BSNavDropdown.Item>
          </BSNavDropdown>
        </BSNav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default Navbar;
