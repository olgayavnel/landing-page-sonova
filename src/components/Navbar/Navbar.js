import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled.div``;
const Contact = styled.div``;

function Navbar() {
  return (
    <Nav>
      <Logo>GEERS</Logo>
      <Contact>
        <p>030 1234 5678</p>
        <p>Mo-Sa 9-18 Uhr</p>
      </Contact>
    </Nav>
  );
}

export default Navbar;
