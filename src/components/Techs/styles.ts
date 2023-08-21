import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--colors-bg-alt);
  padding: 100px 10px;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0 0 23px;
  font-weight: var(--fw-light);
  font-size: 22px;
  line-height: normal;
  letter-spacing: -0.055rem;
  border-bottom: 1px solid var(--colors-text);
`;

export const Subtitle = styled.h3`
  margin: 90px 0 26px;
  font-weight: var(--fw-light);
  font-size: 50px;
  line-height: 3.625rem;
  text-align: center;
  letter-spacing: -0.125rem;
`;

export const Description = styled.p`
  margin: 0 auto;
  max-width: 460px;
  width: 100%;
  font-weight: var(--fw-light);
  font-size: 14px;
  line-height: 1.25rem;
  text-align: center;
  letter-spacing: -0.035rem;
`;

export const TechsList = styled.ul`
  margin: 100px auto 0;
  padding: 0;
  max-width: 720px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const TechsItem = styled.li`
  display: inline-flex;
  width: 90px;
  height: 60px;
  box-shadow: var(--shadow);
  border-radius: 10px;
  border-radius: 10px;
  background: var(--colors-ui-alt);
  font-weight: 400;
  font-size: 14px;
  line-height: calc(17 / 14);
  justify-content: center;
  align-items: center;
  letter-spacing: -0.04em;
`;
