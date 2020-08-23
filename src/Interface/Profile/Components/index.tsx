import React from 'react';
import * as S from '../styles';

export const Profile: React.FC = () => {
  return (
    <S.Container>
      <S.Section>
        <S.LeftSection>
          <S.Heading>
            Hello, I'm Rahul!
            <br />a Full stack developer
          </S.Heading>
          <S.SubHeading>
            Always interested in learning and experimenting with new
            <br />
            technologies. Looking for oppurtunities to grow as a<br />
            developer and improve my skills.
          </S.SubHeading>
        </S.LeftSection>
        <S.RightSection />
      </S.Section>
    </S.Container>
  );
};
