import React from 'react';
import { ColumnLeft, ColumnRight, InfoWrapper } from './InfoStyle';

function Info({ paragraphOne, paragraphTwo, paragraphThree, img, reverse }) {
  return (
    <InfoWrapper>
      <ColumnLeft reverse={reverse}>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        <p>{paragraphThree}</p>
      </ColumnLeft>
      <ColumnRight src={img} reverse={reverse} />
    </InfoWrapper>
  );
}

export default Info;
