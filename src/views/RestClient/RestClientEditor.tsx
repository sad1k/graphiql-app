import { TMethod } from '@utils/restclient/method-type';
import { v4 as uuidv4 } from 'uuid';

interface IRestClientEditor {
  method: TMethod;
  url: string;
  headers: { [key: string]: string | string[] | undefined };
}

const RestClientEditor = ({ method, url, headers }: IRestClientEditor) => (
  <section>
    <h3>RestClient Editor</h3>
    <div>
      {/* TODO: add method selector */}
      <span>{method}</span>
      {/* TODO: add url input */}
      <span>{url}</span>
    </div>
    <section>
      <div>
        <h4>Headers: </h4>
        {/* TODO: add add-headers button */}
        {Object.entries(headers).map(([key, value]) => (
          <li key={uuidv4()}>{`key: ${key}: value ${value as string}`}</li>
        ))}
      </div>
      {/* TODO: add headers table */}
    </section>
    <section>
      <h4>Body </h4>
      {/* TODO: add JSON/Text Editor (the same component in response) */}
    </section>
  </section>
);

export default RestClientEditor;
