import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { IconButton } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';
import { Controller, useFormContext } from 'react-hook-form';
import formatCode from '@/utils/code-editor/format-code';
import { IRestClientInputs } from '@/types/rest-client-form';

export interface ICodeEditor extends ReactCodeMirrorProps {
  initialValue: string;
}

const CodeEditor = ({ initialValue, ...codeMirrorProps }: ICodeEditor) => {
  const { control } = useFormContext<IRestClientInputs>();

  return (
    <Controller
      name='body'
      control={control}
      defaultValue={initialValue}
      render={({ field }) => (
        <>
          <CodeMirror
            {...codeMirrorProps}
            {...field}
            id='body-input'
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
            }}
          />
          {codeMirrorProps.editable && (
            <IconButton
              onClick={() => {
                void formatCode(field.value).then((formatedValue) => {
                  void field.onChange(formatedValue);
                });
              }}
              size='medium'
            >
              <AutoFixHigh fontSize='medium' />
            </IconButton>
          )}
        </>
      )}
    />
  );
};

export default CodeEditor;
