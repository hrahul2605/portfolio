import React from 'react';
import * as S from '../styles';
import { Links } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <S.Container>
      <S.Heading>TECHNOLOGY</S.Heading>
      <S.SubHeading>Stack</S.SubHeading>
      <S.StackList>
        {Links.map((item, index) => (
          <S.Item key={index} src={item} />
        ))}
      </S.StackList>
    </S.Container>
  );
};
