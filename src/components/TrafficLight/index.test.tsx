import React from 'react';
import { render } from '@testing-library/react';
import TrafficLight from '.';

test('renders traffic light with the correct color', () => {
  const { getByTestId } = render(<TrafficLight color="red" />);
  const redLight = getByTestId('red-light');
  expect(redLight).toBeInTheDocument();
});
