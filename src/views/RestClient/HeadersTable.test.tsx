import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { THeaders } from '@/types/headers';
import { FormProvider, useForm } from 'react-hook-form';
import { IRestClientInputs } from '@/types/rest-client-form';
import userEvent from '@testing-library/user-event';
import HeadersTable from './HeadersTable';

const INITIAL_HEADERS_LENGTH = 10;
const mockForm: IRestClientInputs = {
  url: 'https://initial-url.com',
  headers: Array.from(Array(INITIAL_HEADERS_LENGTH).keys()).map(
    (_value, index) => ({
      key: `key${index}`,
      value: `value${index}`,
    }),
  ),
  body: '',
  method: 'GET',
};

describe('HeadersTable component', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm({
      defaultValues: mockForm,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  const initialHeaders: THeaders = [{ key: `key-init`, value: `value-init` }];

  it('should render correctly with initial value', () => {
    render(
      <Wrapper>
        <HeadersTable initialHeaders={initialHeaders} />
      </Wrapper>,
    );

    const input = screen.getByText('key');

    expect(input).toBeDefined();
  });

  it('should allow user to add header', async () => {
    render(
      <Wrapper>
        <HeadersTable initialHeaders={initialHeaders} />
      </Wrapper>,
    );

    const button = screen.getByText('Add header');
    const rowStack = screen.getByTestId('dynamic-table-rows');
    const currentLength = rowStack.children.length;

    await userEvent.click(button);

    expect(rowStack.children.length).toBe(currentLength + 1);
  });
});
