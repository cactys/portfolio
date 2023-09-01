'use client';

import { LegacyRef } from 'react';

import { Container, NavEl, NavLink, NavList, Wrapper } from './styles';

export const Navigation = ({ scrollRef, onScroll }: { scrollRef: LegacyRef<HTMLElement>; onScroll: VoidFunction }) => {
  return (
    <Wrapper ref={scrollRef} onScroll={onScroll}>
      <Container>
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
      </Container>
    </Wrapper>
  );
};
