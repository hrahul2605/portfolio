import styled from '@emotion/styled';
import { flexibleRowDiv, flexibleColDiv } from '../../Shared/styles';
import { Bold, Regular } from '../../Shared/typography';
import { White } from '../../Shared/colors';

export const Container = styled(flexibleColDiv)({
  height: '100vh',
  justifyContent: 'center',
  padding: '0 12.5%',
});

export const Section = styled(flexibleRowDiv)({
  width: '100%',
  justifyContent: 'space-between',
});

export const LeftSection = styled(flexibleColDiv)({
  padding: '42px 0px 42px 0px',
});

export const Heading = styled.p({
  fontWeight: Bold,
  fontSize: '3rem',
});

export const SubHeading = styled.p({
  marginTop: '12px',
  fontWeight: Regular,
  fontSize: '1rem',
});

export const RightSection = styled.div({
  backgroundColor: White,
  height: '320px',
  width: '320px',
  borderRadius: '512px',
});
