'use client';

import { AuthNav } from '../AuthNav/AuthNav';
import { Logo } from '../Logo/Logo';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { HeaderEl, NavContainer, Wrapper } from './styles';

export const TheHeader = () => {
  return (
    <Wrapper>
      <HeaderEl>
        <Logo />
        <NavContainer>
          <AuthNav />
          <ThemeButton />
        </NavContainer>
      </HeaderEl>
    </Wrapper>
  );
};
