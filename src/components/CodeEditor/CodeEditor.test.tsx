import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import CodeEditor from './CodeEditor';

const mockForm = {
  body: '',
};

vi.mock('@/utils/code-editor/format-code', () => ({
  useAppSelector: () => {},
}));

describe('Code editor component', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm({
      defaultValues: mockForm,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('should render ', () => {
    render(
      <Wrapper>
        <CodeEditor initialValue='test value' editable={false} />
      </Wrapper>,
    );

    const editor = screen.getByTestId('code-editor');

    expect(editor).toBeDefined();
  });

  it('should render with button', () => {
    render(
      <Wrapper>
        <CodeEditor initialValue='test value' editable />
      </Wrapper>,
    );

    const button = screen.getByTestId('format-code-button');

    expect(button).toBeDefined();
  });
});
