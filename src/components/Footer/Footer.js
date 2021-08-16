import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  gap: 1rem;
  /* justify-content: center;
  justify-items: center; */
  align-items: center;
`;
const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Links>
        <a href='/'>Impressum</a>
        <a href='/'>Datenshutz</a>
      </Links>
      <p>Copyright 2020. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
