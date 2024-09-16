import { expect, test } from 'vitest';
import { BLUE_COLOR, PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

import { backgroundColor, color, direction, alignSelf } from './TeamItemStyle';

const even = 2;
const odd = 3;

test('bgc color', () => {
  const white = backgroundColor(even);
  const pink = backgroundColor(odd);

  expect(white).toBe(WHITE_COLOR);
  expect(pink).toBe(PINK_COLOR);
});

test('textColor', () => {
  const blue = color(even);
  const white = color(odd);

  expect(blue).toBe(BLUE_COLOR);
  expect(white).toBe(WHITE_COLOR);
});

test('direction', () => {
  const row = direction(even);
  const rowReverse = direction(odd);

  expect(row).toBe('row');
  expect(rowReverse).toBe('row-reverse');
});

test('alignSelf', () => {
  const baseline = alignSelf(even);
  const end = alignSelf(odd);

  expect(baseline).toBe('baseline');
  expect(end).toBe('end');
});
