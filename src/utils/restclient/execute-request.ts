import { IRestClientForm } from '@/types/rest-client-form';
import getResponseResults from './getResponseResults';

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

      setStatus(status);
      setResponse(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  void fetchData();
};

export default executeRequest;
