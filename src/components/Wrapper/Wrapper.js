import React from 'react';
import { infoData, infoDataTwo } from '../../data/infoData';
import CTA from '../CTA/CTA';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';
import Usp from '../Usp/Usp';
import { ContentWrap } from './WrapperStyles';

function Wrapper() {
  return (
    <ContentWrap>
      <Stats />
      <Info {...infoData} />
      <CTA />
      <Info {...infoDataTwo} />
      <Usp />
    </ContentWrap>
  );
}

export default Wrapper;
