import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { flexibleRowDiv, flexibleColDiv } from '../../Shared/styles';
import { Bold, Regular } from '../../Shared/typography';
import { LightBlue } from '../../Shared/colors';
import { TopBlob } from '../../Shared/Assets/TopBlob';
import { DownArrowIcon } from '../../Shared/Assets/Icons/DownArrowIcon';

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

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
`;

export const DownArrow = styled.a<{ visible: boolean }>`
  position: absolute;
  height: 24px;
  width: 24px;
  bottom: 0;
  margin: 48px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  animation: ${bounce} 2s ease-in-out infinite;
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled(DownArrowIcon)({
  height: 24,
  width: 24,
});
