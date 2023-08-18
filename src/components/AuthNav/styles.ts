import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  column-gap: 1.88rem;
  align-items: center;
`;

export const Registration = styled(Link)`
  text-decoration: none;
  color: var(--colors-text);
  transition: var(--op-transition);

  font-weight: var(--fw-normal);
  font-size: 0.75rem;
  line-height: 1rem;

  &:hover {
    opacity: var(--opacity);
  }
`;

export const Login = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  height: 2rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);

  text-decoration: none;
  color: var(--colors-text-ui);
  transition: var(--op-transition);

  font-weight: var(--fw-normal);
  font-size: 0.75rem;
  line-height: 1rem;

  &:hover {
    opacity: var(--opacity);
  }
`;
