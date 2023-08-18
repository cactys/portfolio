'use client';

import { Container, NavEl, NavLink, NavList, Wrapper } from './styles';

export const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <NavList>
          <NavEl>
            <NavLink href="/">О проекте</NavLink>
          </NavEl>
          <NavEl>
            <NavLink href="/">Технологии</NavLink>
          </NavEl>
          <NavEl>
            <NavLink href="/">Студент</NavLink>
          </NavEl>
        </NavList>
      </Wrapper>
    </Container>
  );
};
