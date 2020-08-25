import React from 'react';
import * as S from '../styles';
import { GithubIcon } from '../../../Shared/Assets/Icons/GithubIcon';
import { LinkedinIcon } from '../../../Shared/Assets/Icons/LinkedinIcon';

export const Footer: React.FC = () => {
  return (
    <>
      <S.TopBlobContainer>
        <S.TopBlob />
      </S.TopBlobContainer>
      <S.Container>
        <S.Heading>Have Any Project in Mind?</S.Heading>
        <S.Heading>Drop me a message at</S.Heading>
        <a href='mailto:hrahul2605@gmail.com'>
          <S.Email>hrahul2605@gmail.com</S.Email>
        </a>
        <S.ContactContainer>
          <S.Contact>
            <a href='https://github.com/hrahul2605'>
              <GithubIcon />
            </a>
            <a href='https://linkedin.com/in/hrahul2605'>
              <LinkedinIcon />
            </a>
          </S.Contact>
        </S.ContactContainer>
        <S.BlobContainer>
          <S.Blob />
        </S.BlobContainer>
      </S.Container>
    </>
  );
};
