import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';

export const ResponseView = ({ json }: { json: object }) => (
  <JsonView style={darkTheme} value={json} />
);
