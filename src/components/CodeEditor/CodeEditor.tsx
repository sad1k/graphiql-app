import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark } from '@uiw/codemirror-theme-solarized';
import { IconButton } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';
import formatCode from '@/utils/code-editor/format-code';
import { Controller, useFormContext } from 'react-hook-form';
import { IRestClientForm } from '@/types/rest-client-form';

interface ICodeEditor {
  isEditable: boolean;
  initialValue: string;
}

const CodeEditor = ({ initialValue, isEditable }: ICodeEditor) => {
  const { control } = useFormContext<IRestClientForm>();

  return (
    <Controller
      name='body'
      control={control}
      defaultValue={initialValue}
      render={({ field }) => (
        <>
          <CodeMirror
            {...field}
            height='500px'
            extensions={[json()]}
            theme={solarizedDark}
            editable={isEditable}
            id='body-input'
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
            }}
          />
          {isEditable && (
            <IconButton
              onClick={async () => {
                const formatedValue = await formatCode(field.value);

                field.onChange(formatedValue);
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
