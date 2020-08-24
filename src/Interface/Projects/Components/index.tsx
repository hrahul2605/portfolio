import React from 'react';
import * as S from '../styles';
import { ProjectCard } from '../../ProjectCard/Components';
import { ProjectData } from '../constants';

export const Projects: React.FC = () => {
  return (
    <S.Container>
      <S.LeftSection>
        <S.Heading>Projects</S.Heading>
        <S.Line />
      </S.LeftSection>
      <S.Separator />
      <S.RightSection>
        {ProjectData.map((project, index) => (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ProjectCard {...project} key={index} />
            <S.Random />
          </div>
        ))}
      </S.RightSection>
    </S.Container>
  );
};
