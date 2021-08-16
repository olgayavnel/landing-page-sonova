import React from 'react';
import {
  BannerContent,
  BannerWrapper,
  FooterImage,
  Icon,
  Section,
  TextWrap,
} from './BannerStyle';
import banner from './../../assets/banner.jpeg';
import geersIcon from './../../assets/geersIcon.png';

function Banner() {
  return (
    <Section>
      <BannerWrapper>
        <FooterImage src={banner} />
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
