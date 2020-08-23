import styled from '@emotion/styled';
import { flexibleColDiv, flexibleRowDiv } from '../../Shared/styles';
import { Bold, Medium } from '../../Shared/typography';

export const Container = styled(flexibleColDiv)({
  margin: '128px 0',
});

export const Heading = styled.p({
  fontSize: '3rem',
  fontWeight: Bold,
  textAlign: 'center',
});

export const Email = styled.p({
  fontWeight: Medium,
  fontSize: '1.125rem',
  textAlign: 'center',
  marginTop: '48px',
});

export const Contact = styled(flexibleRowDiv)({
  width: '74px',
  marginTop: '48px',
  justifyContent: 'space-between',
});

export const ContactContainer = styled(flexibleRowDiv)({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});
