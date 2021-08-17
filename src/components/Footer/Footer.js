import React from 'react';
import styled from 'styled-components';

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
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Links>
        <a href='/'>Impressum</a>
        <a href='/'>Datenshutz</a>
      </Links>
      <p>Copyright © 2020. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
