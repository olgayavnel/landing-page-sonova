import React from 'react';
import styled from 'styled-components';
import geersLogo from './../../assets/geersLogo.png';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled.img``;
const Contact = styled.div`
  color: #4aa724;
`;

function Navbar() {
  return (
    <Nav>
      <Logo src={geersLogo} />
      <Contact>
        <h4>030 1234 5678</h4>
        <p>Mo-Sa 9-18 Uhr</p>
      </Contact>
    </Nav>
  );
}

export default Navbar;
