import { IRestClientForm } from '@/types/rest-client-form';
import getResponseResults from './getResponseResults';
import formatCode from '../code-editor/format-code';
import notification from '../notification/notification';

const executeRequest = ({
  method,
  url,
  headers,
  body,
  setStatus,
  setResponse,
}: IRestClientForm) => {
  async function fetchData() {
    try {
      const { status, data: responseData } = await getResponseResults(
        method,
        url,
        headers,
        body,
      );
      const formattedData = await formatCode(responseData);

      setStatus(status);
      setResponse(formattedData);
    } catch (error) {
      notification('error', 'Error fetching data:');
    }
  }

  void fetchData();
};

export default executeRequest;
