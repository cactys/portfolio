'use client';

import {
  AuthorAbout,
  AuthorBlock,
  AuthorName,
  Avatar,
  Container,
  DescriptionItem,
  DescriptionList,
  GitHub,
  Title,
  Wrapper,
} from './styles';

import avatar from '../../images/avatar.jpg';
import { LazyShow } from '../LazyShow/LazyShow';

export const AboutAuthor = () => {
  return (
    <Wrapper>
      <LazyShow>
        <Title>Студент</Title>
      </LazyShow>
      <Container>
        <AuthorBlock>
          <LazyShow>
            <AuthorName>Владимир</AuthorName>
            <AuthorAbout>Фронтенд-разработчик, 39 лет</AuthorAbout>
          </LazyShow>
          <DescriptionList>
            <DescriptionItem>
              <LazyShow>
                Я работаю в сфере IT более 17 лет и за это время накопил
                значительный опыт в области системного администрирования. Я
                ответственный и дисциплинированный специалист, готовый решать
                любые задачи, связанные с настройкой, обслуживанием и
                мониторингом компьютерных систем. Я также имею знания в области
                сетевой безопасности, что позволяет мне обеспечивать защиту
                информации и данных на компьютерных сетях.
              </LazyShow>
            </DescriptionItem>
            <DescriptionItem>
              <LazyShow>
                Недавно я начал изучать разработку веб-приложений и прошел
                обучение на курсе "Frontend разработчик" и "React разработчик" в
                Яндекс Практикуме. За время обучения я узнал много нового о
                создании интерактивных пользовательских интерфейсов, работе с
                базами данных, веб-технологиях и тестировании кода. Я уверен,
                что приобретенные знания помогут мне стать успешным Frontend
                разработчиком и реализовать свои профессиональные амбиции.
              </LazyShow>
            </DescriptionItem>
            <DescriptionItem>
              <LazyShow>
                Я стремлюсь к профессиональному развитию и всегда открыт новым
                вызовам и задачам. Я уверен, что мои знания и опыт в системном
                администрировании в сочетании с навыками веб-разработки позволят
                мне эффективно работать в команде и достигать высоких
                результатов. Я готов к новым проектам и ищу возможности для
                роста и развития в своей новой профессии.
              </LazyShow>
            </DescriptionItem>
          </DescriptionList>
          <LazyShow>
            <GitHub href="https://github.com/cactys" target="blanc">
              GitHub
            </GitHub>
          </LazyShow>
        </AuthorBlock>
        <Avatar src={avatar} alt="Аватар" />
      </Container>
    </Wrapper>
  );
};
