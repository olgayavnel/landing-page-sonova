import React from 'react';
// import heroimg from './../../assets/hero-image.jpeg';
import award1 from './../../assets/award1.png';
import award2 from './../../assets/award2.png';
import award3 from './../../assets/award3.png';
import award4 from './../../assets/award4.png';
import Button from './../Button/Button';
import {
  AwardIcon,
  AwardIconWrap,
  Awards,
  HeroContent,
  HeroWrapper,
  Section,
} from './HeroStyle';

function Hero() {
  return (
    <Section>
      <HeroWrapper>
        {/* <HeroImage src={heroimg} /> */}
        <HeroContent>
          <h1>Das richtige Hörgerät verbessert mehr als nur Ihr Hören.</h1>
          <Button>
            <p>Jetzt Hörgeräte kostenlos testen</p>
          </Button>
          <Awards>
            <AwardIcon src={award1} />
            <AwardIcon src={award2} />
            <AwardIcon src={award3} />
            <AwardIconWrap>
              <AwardIcon src={award4} style={{ height: '23px' }} />
              <p>4,1/5</p>
            </AwardIconWrap>
          </Awards>
        </HeroContent>
      </HeroWrapper>
    </Section>
  );
}

export default Hero;
