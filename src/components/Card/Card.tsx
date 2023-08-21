'use client';

import { Description, Title } from './styles';

type Props = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};
