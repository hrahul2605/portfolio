import React from 'react';
import * as S from '../styles';
import { GithubIcon } from '../../../Shared/Assets/Icons/GithubIcon';
import { LinkedinIcon } from '../../../Shared/Assets/Icons/LinkedinIcon';
import { TwitterIcon } from '../../../Shared/Assets/Icons/TwitterIcon';

export const Footer: React.FC = () => {
  return (
    <>
      <S.TopBlobContainer>
        <S.TopBlob />
      </S.TopBlobContainer>
      <S.Container>
        <S.Heading>Have Any Project in Mind?</S.Heading>
        <S.Heading>Drop me a message at</S.Heading>
        <S.EmailContainer href='mailto:hrahul2605@gmail.com'>
          <S.Email>hrahul2605@gmail.com</S.Email>
        </S.EmailContainer>
        <S.ContactContainer>
          <S.Contact>
            <S.Icon href='https://github.com/hrahul2605'>
              <GithubIcon />
            </S.Icon>
            <S.Icon href='https://linkedin.com/in/hrahul2605'>
              <LinkedinIcon />
            </S.Icon>
            <S.Icon style={{alignItems:'center', display: 'flex'}} href='https://twitter.com/hrahul2605'>
              <TwitterIcon />
            </S.Icon>
          </S.Contact>
        </S.ContactContainer>
        <S.BlobContainer>
          <S.Blob />
        </S.BlobContainer>
      </S.Container>
    </>
  );
};
