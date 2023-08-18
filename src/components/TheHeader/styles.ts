import { styled } from 'styled-components';

export const HeaderEl = styled.header`
  background-color: var(--colors-head);
  padding: 1.13rem 4.38rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.13rem 1.88rem;
  }

  @media (max-width: 320px) {
    padding: 1.13rem 0.88rem;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.57rem;
`;
