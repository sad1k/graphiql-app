import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark } from '@uiw/codemirror-theme-solarized';
import { useCallback, useState } from 'react';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import estreeParser from 'prettier/plugins/estree';
import { IconButton } from '@mui/material';
import { AutoFixHigh } from '@mui/icons-material';

const formatCode = async (value: string, setter: (value: string) => void) => {
  const formatedValue = await prettier.format(value, {
    parser: 'json',
    plugins: [parserBabel, estreeParser],
  });

  setter(formatedValue);
};

const CodeEditor = () => {
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
      />
      <IconButton onClick={() => formatCode(value, setValue)} size='medium'>
        <AutoFixHigh fontSize='medium' />
      </IconButton>
    </>
  );
};

export default CodeEditor;
