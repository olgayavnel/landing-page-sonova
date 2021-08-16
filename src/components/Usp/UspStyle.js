import styled from 'styled-components';

export const UspWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
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
    font-weight: 700;
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
`;

export const WarrantyWrap = styled.div`
  display: flex;
  gap: 0 1.5rem;
  justify-content: center;
`;

export const Warranty = styled.img`
  width: 110px;
  height: 101px;
`;
