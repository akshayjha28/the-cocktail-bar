import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe(`app-render-tests`, () => {

  const cocktails = [{
    id: `aperol`,
    name: `Spitz`,
    description: `Test cocktail`,
    image: `Default`
  }];

  test('app-render-success', () => {
    const { getByText } = render(<App cocktails={cocktails}/>);
    const linkElement = getByText(/the cocktail bar/i);
    expect(linkElement).toBeInTheDocument();
  });
});
