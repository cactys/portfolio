import { Login, Registration, Wrapper } from "./styles";

export const AuthNav = () => {
  return (
    <Wrapper>
      <Registration href="/signup">Регистрация</Registration>
      <Login href="signin">Войти</Login>
    </Wrapper>
  );
};
