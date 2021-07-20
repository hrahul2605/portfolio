import React from "react";
import { Props } from "../types";
import * as S from "../styles";

export const ExperienceCard: React.FC<Props> = ({
  post,
  start,
  end,
  description,
  url,
  org,
  icon,
}) => {
  return (
    <S.Container>
      <S.IntervalContainer>
        <S.Icon />
        <S.IntervalHeading>
          {start}
          {end ? ` ~ ${end}` : null}
        </S.IntervalHeading>
      </S.IntervalContainer>
      <S.Row>
        <S.Image src={icon} />
        <a href={url !== undefined ? url[0] : "/"}>
          <S.Title>{post}</S.Title>
          <S.SubTitle>{org}</S.SubTitle>
        </a>
      </S.Row>

      {description.map((desc, index) => (
        <S.Description key={index}>{desc}</S.Description>
      ))}
    </S.Container>
  );
};
