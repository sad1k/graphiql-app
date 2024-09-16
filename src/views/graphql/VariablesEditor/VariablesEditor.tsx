import CodeMirror from 'codemirror';
import { useEffect, useRef } from 'react';

interface IVariablesEditorProps {
  setVariables: (value: string) => void;
}

export const VariablesEditor = ({ setVariables }: IVariablesEditorProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(
      ref.current as unknown as HTMLTextAreaElement,
      {
        mode: 'json',
        theme: 'monokai',
        lineNumbers: true,
        lint: true,
        autocorrect: true,
      },
    );

    editor.on('change', (funcEditor) => {
      setVariables(funcEditor.getValue());
    });

    return () => {
      editor.toTextArea();
    };
  }, [setVariables]);

  return <textarea ref={ref} />;
};
