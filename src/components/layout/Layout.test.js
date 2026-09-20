import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

test('renders Layout with children', () => {
  const expectedContents = 'Hello';
  render(
    <BrowserRouter>
      <Layout>{expectedContents}</Layout>
    </BrowserRouter>
  );
  expect(screen.getByText(expectedContents)).toBeInTheDocument();
});
