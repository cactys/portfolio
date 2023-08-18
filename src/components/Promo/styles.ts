'use client';

import { styled } from 'styled-components';

import bg from '../../images/pic__COLOR_landing-logo.svg';

export const Container = styled.section`
  background-color: var(--colors-head);
  background-image: url('${bg.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 320px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 524px;
  align-items: center;

`;

export const Title = styled.h1`
  margin: 0 auto;
  width: 730px;
  color: var(--colors-text);
  text-align: center;
  font-family: Inter;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: var(--fw-light);
  line-height: 3.625rem; /* 116% */
  letter-spacing: -0.125rem;
`;
