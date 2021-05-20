import React from 'react';
import { Navbar as BSNavbar, Nav as BSNav } from 'react-bootstrap';

import { BsHouseDoor, BsPerson, BsBag } from 'react-icons/bs';

import './styles.scss';

const BottomNav = () => {
  return (
    <BSNavbar bg="light" expand="lg" fixed="bottom">
      <BSNav className="mr-auto">
        <BSNav.Link className="nav-items" href="/homepage">
          <div className="link-container">
            <BsHouseDoor className="icon" />
            Home
          </div>
        </BSNav.Link>
        <BSNav.Link className="nav-items" href="/homepage">
          <div className="link-container">
            <BsPerson className="icon" />
            My Account
          </div>
        </BSNav.Link>
        <BSNav.Link className="nav-items" href="/cart">
          <div className="link-container">
            <BsBag className="icon" />
            Cart
          </div>
        </BSNav.Link>
      </BSNav>
    </BSNavbar>
  );
};

export default BottomNav;
