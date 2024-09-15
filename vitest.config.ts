import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfig from './tsconfig.json';

const alias = Object.fromEntries(
  Object.entries(tsconfig.compilerOptions.paths).map(([key, [value]]) => [
    key.replace('/*', ''),
    path.resolve(__dirname, value.replace('/*', '')),
  ]),
);

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: alias,
    coverage: {
      provider: 'v8',
      exclude: [
        '**/.eslintrc.cjs',
        'next-env.d.ts',
        'vitest.config.ts',
        'next.config.js',
        'next.config.mjs',
        '.next',
      ],
    },
  },
});
