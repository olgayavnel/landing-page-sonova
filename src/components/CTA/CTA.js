import React from 'react';
import Button from '../Button/Button';
import { ButtonWrapper } from './CTAStyles';

function CTA() {
  function onButtonClick() {
    alert('POP UP!');
  }

  return (
    <ButtonWrapper>
      <Button onClick={onButtonClick}>
        <p>Hörgeräte unverbindlich Probetragen</p>
      </Button>
    </ButtonWrapper>
  );
}

export default CTA;
