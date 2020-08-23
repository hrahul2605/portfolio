import styled from '@emotion/styled';
import { flexibleRowDiv, flexibleColDiv } from '../../Shared/styles';
import { SemiBold, ExtraBold, Regular } from '../../Shared/typography';
import { LightBlue } from '../../Shared/colors';
import { ActivityIcon } from '../../Shared/Assets/ActivityIcon';

export const Container = styled(flexibleRowDiv)({
  justifyContent: 'space-between',
  width: '100%',
});

export const LeftSection = styled(flexibleColDiv)({
  flex: 2,
  backgroundColor: 'transparent',
});

export const RightSection = styled(flexibleColDiv)({
  flex: 3,
  backgroundColor: 'transparent',
});

export const IntervalContainer = styled(flexibleRowDiv)({
  alignItems: 'center',
  marginBottom: '20px',
  backgroundColor: 'transparent',
});

export const IntervalHeading = styled.p({
  fontWeight: SemiBold,
  fontSize: '0.875rem',
  backgroundColor: 'transparent',
});

export const Title = styled.p({
  fontWeight: ExtraBold,
  fontSize: '1.125rem',
  width: '180px',
  backgroundColor: 'transparent',
});

export const Description = styled.p({
  fontWeight: Regular,
  fontSize: '1rem',
  backgroundColor: 'transparent',
});

export const Icon = styled(ActivityIcon)({
  fill: LightBlue,
  stroke: LightBlue,
  paddingRight: '14px',
});
