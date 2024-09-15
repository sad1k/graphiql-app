import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark } from '@uiw/codemirror-theme-solarized';
import {  useState } from 'react';
import { IconButton } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';
import formatCode from '@/utils/code-editor/format-code';
import { Controller, useFormContext } from 'react-hook-form';
import { IRestClientForm } from '@/types/rest-client-form';

interface ICodeEditor {
  isEditable: boolean;
  initialValue: string;
}

const CodeEditor = ({
  initialValue: initialvalue,
  isEditable,
}: ICodeEditor) => {
  const [value, setValue] = useState<string>('');
  const { control } = useFormContext<IRestClientForm>();

  return (
    <Controller
      name='body'
      control={control}
      defaultValue={initialvalue}
      render={({ field }) => (
        <>
          <CodeMirror
            {...field}
            height='500px'
            extensions={[json()]}
            theme={solarizedDark}
            editable={isEditable}
            id='body-input'
          />
          {isEditable || (
            <IconButton
              onClick={() => formatCode(value, setValue)}
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
