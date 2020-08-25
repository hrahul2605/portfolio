import styled from '@emotion/styled';
import { flexibleColDiv } from '../../Shared/styles';
import { GreyShade } from '../../Shared/colors';
import { ExtraBold, Medium } from '../../Shared/typography';

export const Container = styled(flexibleColDiv)`
  background-color: ${GreyShade};
  height: 288px;
  width: 427px;
  border-radius: 24px;
  margin: 0 24px 24px 0;
  overflow: hidden;
  box-shadow: 2px 2px 2px #000000;
  position: relative;
  @media (max-width: 569px) {
    width: 220px;
    height: 200px;
    margin: 0;
  }
`;

export const Image = styled.img<{ hover: boolean }>`
  object-fit: cover;
  transform: ${(props) => (props.hover ? 'scale(1.1)' : '0')};
  transition: transform 300ms ease-in;
`;

export const Details = styled(flexibleColDiv)<{ hover: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: opacity 200ms ease-in;
`;

export const Title = styled.p({
  fontWeight: ExtraBold,
  fontSize: '3rem',
});

export const Description = styled.p({
  fontWeight: Medium,
  fontSize: '1rem',
  textAlign: 'center',
  padding: '12px',
});
