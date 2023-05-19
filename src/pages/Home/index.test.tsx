import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home component', () => {
  it('renders TrafficLight component with the correct color', () => {
    render(<Home />);
    expect(screen.getByTestId('red-light')).toBeInTheDocument();
    expect(screen.getByTestId('yellow-light')).toBeInTheDocument();
    expect(screen.getByTestId('green-light')).toBeInTheDocument();
  });
});
