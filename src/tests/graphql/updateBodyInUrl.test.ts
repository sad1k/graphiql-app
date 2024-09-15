import { expect, test, vi } from 'vitest';
import { updateBodyInUrl } from '@utils/graphql/updateBodyInUrl';

test('updateBodyInUrl error with url', () => {
  const newBody = 'newBody';

  try {
    updateBodyInUrl(newBody);
  } catch (err) {
    expect(err).toEqual(
      Error('URL не соответствует ожидаемому формату с GRAPHQL'),
    );
  }
});

test('updateBodyInUrl with url', () => {
  const newBody = 'newBody';

  window = Object.create(window) as typeof globalThis & Window;

  const url =
    'http://localhost:3000/graphql/aHR0cHM6Ly9ncmFwaHFsLXBva2Vtb24yLnZlcmNlbC5hcHA=/cXVlcnl7Cglwb2tlbW9ucyhmaXJzdDogMSl7CiAgCW5hbWU6IG5hbWUKICAgIGNsYXNzaWZpY2F0aW9uOiBjbGFzc2lmaWNhdGlvbgogIH0KfQ==';

  Object.defineProperty(window, 'location', {
    value: {
      href: url,
    },
    writable: true,
  });
  Object.defineProperty(window, 'history', {
    value: {
      pushState: vi.fn(),
    },
    writable: true,
  });
  updateBodyInUrl(newBody);
  expect(window.history.pushState).toBeCalledTimes(1);
});