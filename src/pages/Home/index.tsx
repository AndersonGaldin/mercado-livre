import React, { useState, useEffect } from 'react';
import TrafficLight from '../../components/TrafficLight';
import { Container } from '../../components/Container';
import { Wrapper } from './atoms';

const Home: React.FC = () => {
  const [color, setColor] = useState<'red' | 'yellow' | 'green'>('red');

  useEffect(() => {
    const listColors: { [key in typeof color]: typeof color } = {
      red: 'yellow',
      yellow: 'green',
      green: 'red',
    };

    const interval = setInterval(() => {
      setColor((prevColor) => listColors[prevColor]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Wrapper>
        <TrafficLight color={color} />
      </Wrapper>
    </Container>
  );
};

export default Home;
