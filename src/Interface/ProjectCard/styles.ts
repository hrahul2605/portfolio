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
  box-shadow: 0px 1px 5px #000000;
  position: relative;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Details = styled(flexibleColDiv)`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 200ms ease-in;
  &:hover {
    opacity: 1;
  }
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
