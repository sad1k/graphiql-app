import { THeaders } from "@/types/headers";
import getResponseResults from "./getResponseResults";
import { TMethod } from "./method-type";

const executeRequest = (
  method: TMethod,
  url: string,
  headers: THeaders,
  body: string,
) => {
  async function fetchData() {
    try {
      const { status, data: responseData } = await getResponseResults(
        method,
        url,
        headers,
        body,
      );

      console.log(status);
      console.log(JSON.parse(responseData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  void fetchData();
};

export default executeRequest;
