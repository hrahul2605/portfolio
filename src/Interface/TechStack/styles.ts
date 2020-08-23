import styled from '@emotion/styled';
import { flexibleColDiv, flexibleRowDiv } from '../../Shared/styles';
import { Medium, Bold } from '../../Shared/typography';

export const Container = styled(flexibleColDiv)({
  padding: '0 12.5%',
  alignItems: 'center',
});

export const Heading = styled.p({
  fontWeight: Medium,
  fontSize: '1.125rem',
});

export const SubHeading = styled.p({
  fontWeight: Bold,
  fontSize: '3rem',
  marginBottom: '48px',
});

export const StackList = styled(flexibleRowDiv)({
  justifyContent: 'center',
});

export const Item = styled.img({
  width: '60px',
  height: '60px',
  margin: '0 6px 0 6px',
});
