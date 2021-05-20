import React from 'react';
import {
  Navbar as BSNavbar,
  Nav as BSNav,
  NavDropdown as BSNavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

import './styles.scss';

let isVisible = false;

const ProductNavbar = () => {
  return (
    <BSNavbar bg="light" expand="lg" sticky="top">
      <BSNavbar.Brand href="/homepage">MIAN ELECTRONICS</BSNavbar.Brand>
      <BSNav.Link href="/filters">Filters</BSNav.Link>
      <BSNavbar.Toggle aria-controls="basic-BSBSNavbar-BSNav" />
      <BSNavbar.Collapse id="basic-BSBSNavbar-BSNav">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Sidebar />
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default ProductNavbar;
