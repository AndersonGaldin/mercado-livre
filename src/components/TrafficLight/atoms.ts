import styled from 'styled-components';

export const TrafficLightIcon = styled.svg`
  height: 100px;
  width: 50vw;

  .st0{
    fill-rule:evenodd;
    clip-rule: evenodd;
    fill:#72BD39; //verde
  }
	.st1{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#EF6657; // vermelho
  }
	.st3{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#262626;
  }
	.st4{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#FFD15C;
  }
`;

export const Ligth = styled.path`
  fill-rule:evenodd;
  clip-rule:evenodd;
  fill: ${(props) => props.currentColor};
`;
