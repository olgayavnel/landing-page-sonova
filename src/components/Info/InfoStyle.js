import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  line-height: 1.4;
  justify-content: center;
  gap: 1rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};

  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  order: ${({ reverse }) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '1' : '2')};
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
