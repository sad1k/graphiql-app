import { TMethod } from '@utils/restclient/method-type';

interface IRestClientEditor {
  method: TMethod;
  url: string;
}

const RestClientEditor = ({ method, url }: IRestClientEditor) => (
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
