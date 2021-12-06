import styled from "@emotion/styled";
import { flexibleRowDiv, flexibleColDiv } from "../../Shared/styles";
import { SemiBold, ExtraBold, Medium, Light } from "../../Shared/typography";
import { LightBlue } from "../../Shared/colors";
import { ActivityIcon } from "../../Shared/Assets/Icons/ActivityIcon";

export const Container = styled(flexibleColDiv)({
  width: "100%",
});

export const IntervalContainer = styled(flexibleRowDiv)({
  alignItems: "center",
  marginBottom: "20px",
});

export const IntervalHeading = styled.p({
  fontWeight: SemiBold,
  fontSize: "0.875rem",
  paddingLeft: "35px",
});

export const Title = styled.p({
  fontWeight: ExtraBold,
  fontSize: "1rem",
  marginBottom: "0.25rem",
});

export const SubTitle = styled.p({
  fontWeight: Medium,
  fontSize: "1.125rem",
});

export const Description = styled.p({
  fontWeight: Light,
  fontSize: "1rem",
  marginBottom: "0.5rem",
});

export const Icon = styled(ActivityIcon)({
  fill: LightBlue,
  stroke: LightBlue,
  position: "absolute",
});

export const Image = styled.img({
  height: "3.5rem",
  marginRight: "1rem",
});

export const Row = styled(flexibleRowDiv)({
  alignItems: "center",
  marginBottom: "1rem",
});
