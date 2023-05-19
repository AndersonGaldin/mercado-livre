import React, { FC } from 'react';
import {
  layoutTrafficLight,
  layoutContentTrafficLight,
  yellowLight,
  redLight,
  greenLight
} from '../../utils/mapperTrafficLight'
import { TrafficLightIcon } from './atoms';
import Ligth from '../Ligth';

type Props = {
  color: string;
};

const TrafficLight:FC<Props> = ({ color }) => {
  return (
    <TrafficLightIcon
      viewBox="0 0 92.68 122.88"
    >
      <g>
        <Ligth
          currentColor="#262626"
          path={layoutTrafficLight}
        />
        <Ligth
          currentColor="#262626"
          path={layoutContentTrafficLight}
        />
        <Ligth
          currentColor={color === 'yellow' ? '#FFD15C' : 'gray'}
          path={yellowLight}
          data-testid="yellow-light"
        />
        <Ligth
          currentColor={color === 'red' ? '#EF6657' : 'gray'}
          path={redLight}
          data-testid="red-light"
        />
        <Ligth
          currentColor={color === 'green' ? '#72BD39' : 'gray'}
          path={greenLight}
          data-testid="green-light"
        />
      </g>
    </TrafficLightIcon>
  );
};

export default TrafficLight;
