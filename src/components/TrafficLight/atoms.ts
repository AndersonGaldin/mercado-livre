import styled from 'styled-components';

interface LightProps {
  currentColor: string;
}

export const TrafficLightIcon = styled.svg`
  height: 100px;
  width: 50vw;
`;

export const Ligth = styled.path<LightProps>`
  fill-rule:evenodd;
  clip-rule:evenodd;
  fill: ${(props) => props.currentColor};
`;
