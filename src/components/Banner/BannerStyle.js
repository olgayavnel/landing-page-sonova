import styled from 'styled-components';

export const Section = styled.section`
  height: 50vh;
  max-height: 1100px;
  margin: 4rem 0;
  position: relative;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 4rem;
  position: relative;
`;

export const FooterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-left: 4rem;
  color: #fff;

  h1 {
    text-align: left;
  }

  h4 {
    text-align: left;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

export const Icon = styled.img``;
