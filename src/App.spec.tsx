import { render, screen } from '@testing-library/react';
import App from './App';

describe('Main component', () =>{
  it('App should be there', () => {
    render(<App />);
    const wrapper = screen.getByTestId('App');
    expect(wrapper).toBeInTheDocument();
  });
})