import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark, solarizedLight } from '@uiw/codemirror-theme-solarized';
import { useCallback, useState } from 'react';

const CodeEditor = () => {
  const [value, setValue] = useState<string>();
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
    <CodeMirror
      value={value}
      height='500px'
      extensions={[json()]}
      theme={solarizedLight}
      onChange={onChange}
      editable={false}
    />
      </>
  );
};
export default CodeEditor;
