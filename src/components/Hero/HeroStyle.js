import styled from 'styled-components';
import heroimg from './../../assets/hero-image.jpeg';
import heroimgMobile from './../../assets/hero-image-mobile.jpeg';

export const Section = styled.section`
  height: 100%;
  position: relative;
  background-image: url(${heroimg});
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    background-image: none;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1100px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 500px;
  position: relative;
  margin: 0 auto 4rem;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 340px;
    padding: 0;
    background-color: #f9f9f9;
    margin: 0 auto 2rem;
  }
`;

export const ResponsiveHero = styled.div`
  @media screen and (max-width: 600px) {
    background-image: url(${heroimgMobile});
    grid-row: 1/2;
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  padding: 1rem;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 500px;
  height: 420px;
  padding: 2rem;
  align-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    line-height: 2.2rem;

    @media screen and (max-width: 900px) {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }

  @media screen and (max-width: 600px) {
    background-color: #f9f9f9;
    grid-row: 2/3;
    grid-column: 1/2;
    padding: 0 2rem;
    justify-content: space-evenly;
    height: 340px;
  }
`;

export const Awards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const AwardIcon = styled.img`
  height: 60px;
  margin: 0 0.2rem;

  @media screen and (max-width: 900px) {
    height: 40px;
  }
`;

export const AwardIconWrap = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-weight: 700;
  }
`;
