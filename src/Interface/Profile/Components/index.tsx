import React from 'react';
import * as S from '../styles';

export const Profile: React.FC = () => {
  return (
    <S.Container>
      <S.Section>
        <S.LeftSection>
          <S.Heading>
            Heyy, I'm Rahul!
            <br />a<S.Position>Full stack developer</S.Position>
          </S.Heading>
          <S.Description>
            Always interested in learning and experimenting with new
            <br />
            technologies. Looking for oppurtunities to grow as a<br />
            developer and improve my skills.
          </S.Description>
        </S.LeftSection>
        <S.RightSection>
          <S.Photo src={require('../../../Shared/Assets/profile.jpg')} />
        </S.RightSection>
      </S.Section>
    </S.Container>
  );
};
