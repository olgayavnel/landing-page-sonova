import React from 'react';
import { statsData } from '../../data/stats';
import { Header, StatsItem, StatsWrap, StatsWrapper } from './StatsStyle';

function Stats() {
  return (
    <StatsWrapper>
      <Header>
        <p>Das sagen Menschen mit Hörgerät:*</p>
      </Header>
      <StatsWrap>
        {statsData.map((item, index) => (
          <StatsItem>
            <h1>{item.heading}</h1>
            <p>{item.paragraph}</p>
          </StatsItem>
        ))}
      </StatsWrap>
    </StatsWrapper>
  );
}

export default Stats;
