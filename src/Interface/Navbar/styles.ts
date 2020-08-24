import styled from '@emotion/styled';
import { flexibleRowDiv } from '../../Shared/styles';
import { BlackShade, White } from '../../Shared/colors';
import { ExtraBold } from '../../Shared/typography';

export const Container = styled(flexibleRowDiv)({
  backgroundColor: BlackShade,
  alignItems: 'center',
  padding: '25px 0px 25px 12.5%',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
});

export const Heading = styled.p({
  fontWeight: ExtraBold,
  fontSize: '1.125rem',
  color: White,
});
