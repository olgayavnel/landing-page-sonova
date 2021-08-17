import styled from 'styled-components';
import banner from './../../assets/banner.jpeg';
import bannerMobile from './../../assets/bannerMobile.jpeg';

export const Section = styled.section`
  height: 50vh;
  max-height: 1100px;
  margin: 4rem 0 0;
  position: relative;
  background-image: url(${banner});
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    background-image: url(${bannerMobile});
    height: 250px;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 4rem;
  position: relative;

  @media screen and (max-width: 600px) {
    padding-top: 1rem;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-left: 4rem;
  color: #fff;
  line-height: 1.9rem;

  h1 {
    text-align: left;

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  h4 {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0.5rem;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

export const Icon = styled.img`
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 48px;
  }
`;
