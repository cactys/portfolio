import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled.section`
  background-color: var(--colors-bg-alt);
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
`;

export const NavList = styled.ul`
  display: flex;
  column-gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavEl = styled.li`
  font-size: 13px;
  font-weight: var(--fw-normal);
  line-height: 1rem;
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: var(--op-transition);
  height: 18px;
  border-bottom: 1px solid var(--colors-text);

  &:hover {
    opacity: var(--opacity);
  }
`;
