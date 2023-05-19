import styled from "styled-components";

interface LightProps {
  currentColor: string;
}

export const CustomLight = styled.path<LightProps>`
  fill-rule:evenodd;
  clip-rule:evenodd;
  fill: ${(props) => props.currentColor};
`;
