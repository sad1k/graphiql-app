import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark } from '@uiw/codemirror-theme-solarized';
import { useCallback, useState } from 'react';
import { IconButton } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';
import formatCode from '@/utils/code-editor/format-code';

interface ICodeEditor {
  isEditable: boolean;
}

const CodeEditor = ({ isEditable }: ICodeEditor) => {
  const [value, setValue] = useState<string>('');
  const onChange = useCallback((val: string) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <>
      <CodeMirror
        value={value}
        height='500px'
        extensions={[json()]}
        theme={solarizedDark}
        onChange={onChange}
        editable={isEditable}
      />
      {isEditable || (
        <IconButton onClick={() => formatCode(value, setValue)} size='medium'>
          <AutoFixHigh fontSize='medium' />
        </IconButton>
      )}
    </>
  );
};

export default CodeEditor;
