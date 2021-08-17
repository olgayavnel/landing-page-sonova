import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
  align-items: center;
  background-color: #414141;
  color: #fff;
  text-decoration: none;

  p {
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Links>
        <Link to='/impressum'>Impressum/</Link>
        <Link to='/copyright'>Datenshutz</Link>
      </Links>
      <p>Copyright © 2020. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
