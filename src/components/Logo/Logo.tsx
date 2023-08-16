"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { LinkHome } from "./styles";

import logoLight from "../../images/logo_theme-light.svg";
import logoDark from "../../images/logo_theme-dark.svg";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <LinkHome href="/">
      {resolvedTheme === "dark" ? (
        <Image src={logoDark} alt="Логотип" width={38} height={38} />
      ) : (
        <Image src={logoLight} alt="Логотип" width={38} height={38} />
      )}
    </LinkHome>
  );
};
