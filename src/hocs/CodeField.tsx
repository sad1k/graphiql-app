import CodeEditor, { ICodeEditor } from '@/components/CodeEditor/CodeEditor';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { solarizedDark } from '@uiw/codemirror-theme-solarized';

interface ICodeField extends ICodeEditor {
  isInForm: boolean;
}

const CodeField = ({ initialValue, isInForm }: ICodeField) => {
  const defaultProps: ReactCodeMirrorProps = {
    height: '500px',
    extensions: [json()],
    theme: solarizedDark,
  };

  if (isInForm)
    return (
      <CodeEditor initialValue={initialValue} {...defaultProps} editable />
    );

  return <CodeMirror {...defaultProps} value={initialValue} editable={false} />;
};

export default CodeField;
