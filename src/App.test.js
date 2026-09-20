import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application brand and navigation', () => {
  render(<App />);
  const brandElement = screen.getByText(/simple client/i);
  expect(brandElement).toBeInTheDocument();
  const createUserLink = screen.getByRole('link', { name: /create user/i });
  expect(createUserLink).toBeInTheDocument();
});































