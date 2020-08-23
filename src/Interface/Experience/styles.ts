import styled from '@emotion/styled';
import { flexibleColDiv, flexibleRowDiv } from '../../Shared/styles';
import { Bold, Regular } from '../../Shared/typography';
import { LightBlue, BorderColor } from '../../Shared/colors';

export const Container = styled(flexibleRowDiv)({
  padding: '0 12.5%',
  marginTop: '128px',
});

export const LeftSection = styled(flexibleColDiv)({
  marginTop: '22px',
  flex: 3,
});

export const Separator = styled(flexibleColDiv)({
  flex: 3,
});

export const RightSection = styled(flexibleColDiv)({
  marginTop: '22px',
  flex: 7,
});

export const Heading = styled.p({
  fontSize: '3rem',
  fontWeight: Bold,
});

export const Line = styled.div({
  backgroundColor: LightBlue,
  height: '4px',
  width: '64px',
  margin: '6px 0 22px 0',
});

export const Description = styled.p({
  fontWeight: Regular,
  fontSize: '1.125rem',
});

export const WorkSeparator = styled.div({
  width: '100%',
  height: '2px',
  backgroundColor: BorderColor,
  borderRadius: '2px',
  margin: '18px 0 24px 0',
});
