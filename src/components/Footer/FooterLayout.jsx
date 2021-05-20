import React from 'react';

import { FooterItems } from './FooterItems';

import './styles.scss';

const { phone, facebook, whatsapp } = FooterItems.contactInfo;
const { logo } = FooterItems.logo;
const { Marker, Coordinates } = FooterItems.address;

const FooterLayout = () => {
  return (
    <div>
      <footer className="footer">
        <a className="footer__logo" href="#">
          {logo}
        </a>
        <div className="footer__social">
          <a href="#">{facebook}</a>
          <a href="#">{whatsapp}</a>
          <a href="#">Phone#:{phone}</a>
        </div>
        <div className="footer__links col1">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer__links col2">
          <a href="#">Address</a>
        </div>
        <div className="footer__cta"></div>
        <div className="footer__copyright">
          &copy; Mian Electronics. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;
