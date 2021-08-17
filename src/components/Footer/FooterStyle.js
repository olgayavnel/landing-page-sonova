import styled from 'styled-components';

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
  align-items: center;
  background-color: #414141;
  color: #fff;
  text-decoration: none;

  p {
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
