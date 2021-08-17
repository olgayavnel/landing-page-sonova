import styled from 'styled-components';

const Button = styled.button`
  background-color: #4aa724;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  color: #fff;
  width: 100%;
  max-width: 436px;

  p {
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0.1rem;
    padding: 0 0.2rem;
    font-weight: 500;

    @media screen and (max-width: 700px) {
      font-size: 0.9rem;
      padding: 0;
    }
  }

  @media screen and (max-width: 600px) {
    width: 320px;
  }
`;

export default Button;
