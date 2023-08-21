import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 110px 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0 0 23px;
  font-weight: var(--fw-light);
  font-size: 22px;
  line-height: normal;
  letter-spacing: -0.04em;
  border-bottom: 1px solid var(--colors-text);
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 70px 0 0;
  display: flex;
  column-gap: 40px;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 26px;
`;

export const Grid = styled.div`
  padding: 0;
  margin: 110px 0 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 36px);
  font-weight: var(--fw-light);
  font-size: 14px;
  line-height: normal;
`;

export const GridItemFrontendWeek = styled.div`
  background-color: var(--colors-ui-base);
  color: var(--colors-text-ui);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 2;
`;

export const GridItemBackendWeek = styled.div`
  background-color: var(--colors-ui-alt);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 6;
`;

export const GridItemFrontend = styled.div`
  font-weight: var(--fw-normal);
  color: var(--colors-text-alt);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 2;
`;

export const GridItemBackend = styled.div`
  font-weight: var(--fw-normal);
  color: var(--colors-text-alt);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 6;
`;
