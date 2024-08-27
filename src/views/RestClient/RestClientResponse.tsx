interface IRestClientResponse {
  status: number;
  data: string;
}
const RestClientResponse = ({ data, status }: IRestClientResponse) => (
  <section>
    <h3>Response</h3>
    <section>
      <div>
        <h4>Status code</h4>
        {/* TODO: add status code view */}
        <span>{status}</span>
      </div>
    </section>
    <section>
      <h4>Body</h4>
      {/* TODO: add JSON viewer (read-only. The same component as Editor in ClientEditor) */}
      <div>{data}</div>
    </section>
  </section>
);

export default RestClientResponse;
