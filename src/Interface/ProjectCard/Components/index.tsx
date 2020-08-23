import React from 'react';
import * as S from '../styles';
import { Props } from '../types';

export const ProjectCard: React.FC<Props> = ({
  img,
  name,
  url,
  description,
}) => {
  return (
    <a href={url}>
      <S.Container>
        <S.Image src={img} />
        <S.Details>
          <S.Title>{name}</S.Title>
          {description ? <S.Description>{description}</S.Description> : null}
        </S.Details>
      </S.Container>
    </a>
  );
};
