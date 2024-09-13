import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/utils/store/store';

import Home from './Home';
import HomeTitle from './HomeTitle/HomeTitle';
import HomeLinks from './HomeLinks/HomeLinks';

test('Ensure that the home component renders', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  expect(screen.getByText(/welcome/i)).toBeDefined();

  const homeTitle = render(
    <Provider store={store}>
      <HomeTitle name='Jack' />
    </Provider>,
  );

  expect(homeTitle.getByText(/jack/i)).toBeDefined();

  const homeLinks = render(
    <Provider store={store}>
      <HomeLinks isAuth />
    </Provider>,
  );

  expect(homeLinks).toBeDefined();
});
