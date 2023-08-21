import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: var(--op-transition);

  &:hover {
    opacity: var(--opacity);
  }
`;
