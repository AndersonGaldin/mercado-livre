import React, { useState, useEffect } from 'react';
import TrafficLight from '../../components/TrafficLight';
import { Container } from '../../components/Container';
import { Wrapper } from '../Home/atoms';

export default function Home() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === 'red') {
        setColor('yellow');
      } else if (color === 'yellow') {
        setColor('green');
      } else if (color === 'green') {
        setColor('red');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <Container>
      <Wrapper>
        <TrafficLight color={color} />
      </Wrapper>
    </Container>
  );
}
