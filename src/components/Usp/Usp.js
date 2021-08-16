import React from 'react';
import { uspData, warrantiesData } from '../../data/uspData';
import Button from './../Button/Button';
import {
  Checkmark,
  ColumnLeft,
  ColumnRight,
  UspItem,
  UspWrapper,
  Warranty,
  WarrantyWrap,
} from './UspStyle';

function Usp() {
  return (
    <UspWrapper>
      <ColumnLeft>
        {uspData.map((item, index) => (
          <UspItem>
            <Checkmark src={item.checkmark} />
            <p key={index}>{item.paragraph}</p>
          </UspItem>
        ))}
      </ColumnLeft>
      <ColumnRight>
        <WarrantyWrap>
          {warrantiesData.map((warranty, index) => (
            <Warranty key={index} src={warranty} />
          ))}
        </WarrantyWrap>
        <Button>
          <p>Ja, ich will besser hören</p>
        </Button>
      </ColumnRight>
    </UspWrapper>
  );
}

export default Usp;
