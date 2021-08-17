import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrapper, Links } from './FooterStyle';

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
