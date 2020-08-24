import styled from '@emotion/styled';
import { flexibleRowDiv, flexibleColDiv } from '../../Shared/styles';
import { Bold, Regular } from '../../Shared/typography';
import { LightBlue } from '../../Shared/colors';
import { TopBlob } from '../../Shared/Assets/TopBlob';

export const Container = styled(flexibleColDiv)({
  height: '100vh',
  justifyContent: 'center',
});

export const Section = styled(flexibleRowDiv)({
  width: '100%',
  justifyContent: 'space-between',
});

export const LeftSection = styled(flexibleColDiv)({
  padding: '42px 0px',
  flex: 3,
  justifyContent: 'center',
});

export const Heading = styled.span({
  fontWeight: Bold,
  fontSize: '3rem',
});

export const Position = styled.span({
  color: LightBlue,
  fontWeight: Bold,
  fontSize: '3rem',
  paddingLeft: '12px',
});

export const Description = styled.div({
  marginTop: '12px',
  fontWeight: Regular,
  fontSize: '1rem',
});

export const RightSection = styled(flexibleColDiv)({
  alignItems: 'flex-end',
  flex: 2,
});

export const Photo = styled.img({
  height: '450px',
  objectFit: 'contain',
  borderRadius: '70px',
  boxShadow: '0px 1px 5px #000000',
});

export const Blob = styled(TopBlob)`
  top: -50%;
  position: absolute;
  align-self: center;
  height: 1580px;
  width: 1580px;
  z-index: -1;
  fill: rgba(242, 244, 248, 0.01);
  transform: rotate(90deg);
`;
