'use client';

import {
  Grid,
  GridItemBackend,
  GridItemBackendWeek,
  GridItemFrontend,
  GridItemFrontendWeek,
  List,
  ListItem,
  Title,
  Wrapper,
} from './styles';
import { Card } from '../Card/Card';
import { LazyShow } from '../LazyShow/LazyShow';

export const AboutProject = () => {
  return (
    <Wrapper>
      <Title>О проекте</Title>
      <LazyShow>
        <List>
          <ListItem>
            <Card
              title="Дипломный проект включал 5 этапов"
              description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
            />
          </ListItem>
          <ListItem>
            <Card
              title="На выполнение диплома ушло 5 недель"
              description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
            />
          </ListItem>
        </List>
      </LazyShow>
      <LazyShow>
        <Grid>
          <GridItemFrontendWeek>1 неделя</GridItemFrontendWeek>
          <GridItemBackendWeek>4 недели</GridItemBackendWeek>
          <GridItemFrontend>Back-end</GridItemFrontend>
          <GridItemBackend>Front-end</GridItemBackend>
        </Grid>
      </LazyShow>
    </Wrapper>
  );
};
