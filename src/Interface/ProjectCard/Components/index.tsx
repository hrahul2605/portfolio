import React, { useState } from 'react';
import * as S from '../styles';
import { Props } from '../types';

export const ProjectCard: React.FC<Props> = ({
  img,
  name,
  url,
  description,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <a href={url}>
      <S.Container
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <S.Image hover={hover} src={img} />
        <S.Details hover={hover}>
          <S.Title>{name}</S.Title>
          {description ? <S.Description>{description}</S.Description> : null}
        </S.Details>
      </S.Container>
    </a>
  );
};
