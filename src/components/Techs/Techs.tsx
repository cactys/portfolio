'use client';

import {
  Container,
  Description,
  Subtitle,
  TechsItem,
  TechsList,
  Title,
  Wrapper,
} from './styles';

import { techList } from '../../utils/constants';
import { LazyShow } from '../LazyShow/LazyShow';

export const Techs = () => {
  return (
    <Wrapper>
      <Container>
        <LazyShow>
          <Title>Технологии</Title>
        </LazyShow>
        <LazyShow>
          <Subtitle>{techList.length} технологий</Subtitle>
        </LazyShow>
        <Description>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </Description>
        <LazyShow>
          <TechsList>
            {techList.map((item) => {
              return <TechsItem key={item}>{item}</TechsItem>;
            })}
          </TechsList>
        </LazyShow>
      </Container>
    </Wrapper>
  );
};
