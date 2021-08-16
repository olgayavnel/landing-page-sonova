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
  font-size: 0.9rem;
  font-weight: 700;
  width: 25rem;

  @media screen and (max-width: 900px) {
    font-size: 0.7rem;
    width: 20rem;
  }
`;

export default Button;
