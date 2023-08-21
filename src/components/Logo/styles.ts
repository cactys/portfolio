import Link from 'next/link';
import styled from 'styled-components';

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: var(--op-transition);

  &:hover {
    opacity: var(--opacity);
  }
`;
