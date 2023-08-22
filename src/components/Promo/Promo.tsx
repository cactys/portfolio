'use client';

import { LazyShow } from '../LazyShow/LazyShow';
import { Container, Title, Wrapper } from './styles';

export const Promo = () => {
  return (
    <Wrapper>
      <LazyShow>
        <Container>
          <Title>Учебный проект студента факультета Веб-разработки.</Title>
        </Container>
      </LazyShow>
    </Wrapper>
  );
};
