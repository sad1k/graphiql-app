import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // Основные стили CodeMirror
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css'; // Стили подсказок
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css'; // Стили линтинга
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';
import 'codemirror/theme/monokai.css';
import { useEffect, useRef, useState } from 'react';
import {
  buildClientSchema,
  getIntrospectionQuery,
  IntrospectionQuery,
} from 'graphql';
import prettier from 'prettier/standalone';
import graphqlPlugin from 'prettier/plugins/graphql';
import { updateBodyInUrl } from '@utils/graphql/updateBodyInUrl';
import { Loader } from '@components/Loader/Loader';
import { innerDivStyles, wrapperDivStyles } from './styles';

const LOCAL_KEY = 'graphQlQuery';

interface IGraphQlEditorProps {
  sdlUrl: string;
  setQuery: (query: string) => void;
}

export const GraphQlEditor = ({ sdlUrl, setQuery }: IGraphQlEditorProps) => {
  const ref = useRef(null);
  const editorRef = useRef<CodeMirror.Editor | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    if (ref.current) {
      const initializeEditor = async () => {
        const response = await fetch(sdlUrl, {
          signal: controller.signal,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: getIntrospectionQuery(),
          }),
        });
        const data = (await response.json()) as { data: IntrospectionQuery };
        const clientSchema = buildClientSchema(data.data);

        editorRef.current = CodeMirror.fromTextArea(
          ref.current as unknown as HTMLTextAreaElement,
          {
            mode: 'graphql',
            theme: 'monokai',
            value: localStorage.getItem(LOCAL_KEY) ?? '',
            lineNumbers: true,
            lint: true,
            hintOptions: {
              schema: clientSchema,
            } as unknown as CodeMirror.ShowHintOptions,
            showHint: true,
            extraKeys: {
              'Ctrl-Space': 'autocomplete',
              'Shift-Ctrl-F': () => {
                if (editorRef.current === null) return;

                const currentText = editorRef.current.getValue();

                // Пример форматирования
                prettier
                  .format(currentText, {
                    parser: 'graphql',
                    plugins: [graphqlPlugin],
                  })
                  .then((val) => {
                    if (editorRef.current) {
                      editorRef.current.setValue(val);
                    }
                  })
                  .catch((err: unknown) => {
                    if (err instanceof Error) {
                      throw new Error('Error formatting code:', err);
                    }
                  });
              },
            },
          },
        );

        editorRef.current.on('change', (editor) => {
          setQuery(editor.getValue());
          localStorage.setItem(LOCAL_KEY, editor.getValue());
        });

        editorRef.current.on('blur', (editor) => {
          updateBodyInUrl(editor.getValue());
        });
        setLoading(false);
      };

      initializeEditor().catch((error) => {
        throw error;
      });
    }

    return () => {
      if (editorRef.current) {
        (
          editorRef.current as CodeMirror.Editor & { toTextArea: () => void }
        ).toTextArea();
        editorRef.current = null;
      } else {
        controller.abort('useEffect cleaned');
      }
    };
  }, [sdlUrl, setQuery]);

  return (
    <div style={wrapperDivStyles}>
      {loading ? (
        <div style={innerDivStyles}>
          <Loader />
        </div>
      ) : (
        ''
      )}
      <textarea ref={ref} />
    </div>
  );
};
