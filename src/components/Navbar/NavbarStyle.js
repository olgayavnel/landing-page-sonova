import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 0 0 1rem;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img``;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4aa724;

  h2 {
    font-weight: 400;

    @media screen and (max-width: 600px) {
      align-self: center;
    }
  }
`;

export const TextWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.2rem;

  p {
    font-size: 0.9rem;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
