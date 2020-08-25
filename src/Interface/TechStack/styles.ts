import styled from '@emotion/styled';
import { flexibleColDiv, flexibleRowDiv } from '../../Shared/styles';
import { Medium, Bold } from '../../Shared/typography';

export const Container = styled(flexibleColDiv)({
  padding: '24px 12.5%',
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

export const StackList = styled(flexibleRowDiv)`
  @media (max-width: 1023px) {
    display: inline;
    text-align: center;
  }
`;
export const Item = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 6px 0 6px;
  @media (max-width: 1023px) {
    width: 30px;
    height: 30px;
    margin: 0 6px 0 6px;
  }
`;
