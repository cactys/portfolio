"use client";

import { AuthNav } from "../AuthNav/AuthNav";
import { Logo } from "../Logo/Logo";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { HeaderEl, NavContainer, Wrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderEl>
      <Wrapper>
        <Logo />
        <NavContainer>
          <AuthNav />
          <ThemeButton />
        </NavContainer>
      </Wrapper>
    </HeaderEl>
  );
};
