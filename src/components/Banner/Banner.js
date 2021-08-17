import React from 'react';
import {
  BannerContent,
  BannerWrapper,
  Icon,
  Section,
  TextWrap,
} from './BannerStyle';
import geersIcon from './../../assets/geersIcon.png';

function Banner() {
  return (
    <Section>
      <BannerWrapper>
        <BannerContent>
          <Icon src={geersIcon} />
          <TextWrap>
            <h1>
              GEERS, DIE VERSTEHEN WAS <br /> VOM HÖREN.
            </h1>
            <h4>Thomas Gottschalk</h4>
          </TextWrap>
        </BannerContent>
      </BannerWrapper>
    </Section>
  );
}

export default Banner;
