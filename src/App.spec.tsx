import { render } from '@testing-library/react';
import App from './App';

describe('Main component', () =>{
  it('App should be there', () => {
    const { getByTestId } = render(<App />);
    const wrapper = getByTestId('App');
    expect(wrapper).toBeInTheDocument();
  });
})