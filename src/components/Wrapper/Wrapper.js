import React from 'react';
import styled from 'styled-components';
import { infoData, infoDataTwo } from '../../data/infoData';
import CTA from '../CTA/CTA';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';
import Usp from '../Usp/Usp';

const ContentWrap = styled.section`
  position: relative;
  background-color: #8181eb;
  height: 100%;
  max-width: 1100px;
  padding: 1rem;
  margin: 0 10rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

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
