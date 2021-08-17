import React from 'react';
import geersLogo from './../../assets/geersLogo.png';
import { Contact, Logo, Nav, TextWrap } from './NavbarStyle';

function Navbar() {
  return (
    <Nav>
      <Logo src={geersLogo} />
      <Contact>
        <h2>030 1234 5678</h2>
        <TextWrap>
          <p>Mo - Sa </p>
          <p>9 - 18 Uhr</p>
        </TextWrap>
      </Contact>
    </Nav>
  );
}

export default Navbar;
