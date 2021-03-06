import React from 'react';
import { Props } from '../types';
import * as S from '../styles';

export const ExperienceCard: React.FC<Props> = ({
  post,
  start,
  end,
  description,
  url,
}) => {
  return (
    <S.Container>
      <S.LeftSection>
        <S.IntervalContainer>
          <S.Icon />
          <S.IntervalHeading>
            {start}
            {end ? ` ~ ${end}` : null}
          </S.IntervalHeading>
        </S.IntervalContainer>
        <S.Title>{post}</S.Title>
      </S.LeftSection>
      <S.Separator />
      <S.RightSection>
        {description.map((desc, index) => (
          <a href={url !== undefined ? url[index] : '/'}>
            <S.Description key={index}>{desc}</S.Description>
          </a>
        ))}
      </S.RightSection>
    </S.Container>
  );
};
