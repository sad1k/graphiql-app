import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import UrlInput from './UrlInput';

const mockForm = {
  url: 'https://initial-url.com',
};

describe('UrlInput component', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm({
      defaultValues: mockForm,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('should render correctly with initial value', () => {
    render(
      <Wrapper>
        <UrlInput initialUrl='https://initial-url.com' xs={12} />
      </Wrapper>,
    );

    const input = screen.getByPlaceholderText('Enter URL');

    expect(input.value).toBe('https://initial-url.com');
  });
});
