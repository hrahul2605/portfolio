import styled from '@emotion/styled';
import { flexibleRowDiv, flexibleColDiv } from '../../Shared/styles';
import { SemiBold, ExtraBold, Regular } from '../../Shared/typography';
import { LightBlue } from '../../Shared/colors';
import { ActivityIcon } from '../../Shared/Assets/Icons/ActivityIcon';

export const Container = styled(flexibleRowDiv)({
  justifyContent: 'space-between',
  width: '100%',
});

export const LeftSection = styled(flexibleColDiv)({
  flex: 2,
});

export const Separator = styled(flexibleColDiv)({
  flex: 1,
});

export const RightSection = styled(flexibleColDiv)({
  flex: 3,
});

export const IntervalContainer = styled(flexibleRowDiv)({
  alignItems: 'center',
  marginBottom: '20px',
});

export const IntervalHeading = styled.p({
  fontWeight: SemiBold,
  fontSize: '0.875rem',
});

export const Title = styled.p({
  fontWeight: ExtraBold,
  fontSize: '1.125rem',
});

export const Description = styled.p({
  fontWeight: Regular,
  fontSize: '1rem',
});

export const Icon = styled(ActivityIcon)({
  fill: LightBlue,
  stroke: LightBlue,
  paddingRight: '14px',
});
