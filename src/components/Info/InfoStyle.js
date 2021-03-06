import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  overflow-x: hidden;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const ColumnLeft = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: center;
  gap: 1rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};

  p {
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.2rem;

    @media screen and (max-width: 600px) {
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 600px) {
    order: 2;
  }
`;

export const ColumnRight = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  order: ${({ reverse }) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '1' : '2')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    order: 1;
  }
`;
