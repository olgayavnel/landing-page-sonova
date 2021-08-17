import styled from 'styled-components';

export const UspWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    overflow: hidden;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem 0;

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const UspItem = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;

    @media screen and (max-width: 600px) {
      line-height: 2.1rem;
      flex-wrap: wrap;
    }
  }
`;

export const Checkmark = styled.img`
  margin-right: 1.2rem;
`;

export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`;

export const WarrantyWrap = styled.div`
  display: flex;
  gap: 0 1.5rem;
  justify-content: center;
`;

export const Warranty = styled.img`
  width: 110px;
  height: 101px;

  @media screen and (max-width: 600px) {
    width: 84px;
    height: 100%;
  }
`;
