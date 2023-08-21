import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

export const Wrapper = styled.section`
  padding: 100px 10px 0;
  margin: 0 auto;
  max-width: 1140px;
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

export const Container = styled.div`
  margin: 66px 0 0;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: space-between;
`;

export const AuthorBlock = styled.address`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h3`
  margin: 0 0 18px;
  font-weight: var(--fw-light);
  font-style: normal;
  font-size: 50px;
  line-height: 3.625rem;
  letter-spacing: -0.125rem;
`;

export const AuthorAbout = styled.p`
  margin: 0 0 26px;
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: 18px;
  line-height: 1.25rem;
`;

export const DescriptionList = styled.ul`
  list-style: inside;
  margin: 0;
  padding: 0;
`;

export const DescriptionItem = styled.li`
  margin: 0 0 12px;
  font-style: normal;
  font-weight: var(--fw-light);
  font-size: 14px;
  line-height: 1.375rem;

  &:last-child {
    margin: 0 0 99px;
  }
`;

export const GitHub = styled(Link)`
  color: var(--colors-text);
  text-decoration: none;
  font-style: normal;
  font-weight: var(--fw-normal);
  font-size: 14px;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: var(--opacity);
  }
`;

export const Avatar = styled(Image)`
  max-width: 270px;
  height: 327px;
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
  vertical-align: top;
  background-color: var(--colors-bg-alt);
  object-fit: cover;
  object-position: center;
`;
