import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    text-align: center;
    padding: 0 0.2rem;
  }
`;

function CTA() {
  return (
    <ButtonWrapper>
      <Button>
        <p>Hörgeräte unverbindlich Probetragen</p>
      </Button>
    </ButtonWrapper>
  );
}

export default CTA;
