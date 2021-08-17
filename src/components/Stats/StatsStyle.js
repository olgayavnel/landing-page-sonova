import styled from 'styled-components';

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  margin: 2rem 0;
  font-size: 1.8rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const StatsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem 1rem;
  align-items: stretch;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const StatsItem = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;

  &:last-child {
    justify-content: center;
    align-self: center;

    @media screen and (max-width: 600px) {
      justify-content: flex-start;
    }
  }

  h1 {
    font-size: 3rem;
    color: #4aa724;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 1.9rem;
      margin-bottom: 0;
    }
  }

  p {
    line-height: 1.6;
    font-weight: 400;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;
  }
`;
