import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Page from './page';

test('Team Component', () => {
  render((<Page />) as React.ReactNode);
  expect(screen.getByText('Our Team')).toBeDefined();
});
