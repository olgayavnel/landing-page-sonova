import styled from 'styled-components';
import heroimg from './../../assets/hero-image.jpeg';

export const Section = styled.section`
  height: 100%;
  position: relative;
  background-image: url(${heroimg});
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  overflow: auto;
`;

// export const HeroImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

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
    line-height: 3rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.1rem;
    padding: 0 0.2rem;
  }
`;

export const Awards = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const AwardIcon = styled.img`
  height: 60px;
  margin: 0 0.2rem;
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
