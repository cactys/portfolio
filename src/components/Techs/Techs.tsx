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

export const Techs = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Технологии</Title>
        <Subtitle>{techList.length} технологий</Subtitle>
        <Description>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </Description>
        <TechsList>
          {techList.map((item) => {
            return <TechsItem key={item}>{item}</TechsItem>;
          })}
        </TechsList>
      </Container>
    </Wrapper>
  );
};
