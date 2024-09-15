import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('Ensure that the footer component renders', () => {
  render((<Footer />) as React.ReactNode);
  expect(screen.getByText('2024')).toBeDefined();
});
