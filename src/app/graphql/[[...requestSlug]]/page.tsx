import { GraphQlPage } from '@views/graphql/GraphQlPage/GraphQlPage';
import { THeaders } from '@/types/headers';

interface IRoute {
  params?: { requestSlug: string[] };
  searchParams?: { [key: string]: string };
}

const Page = ({ params, searchParams }: IRoute) => {
  if (params?.requestSlug) {
    const { 0: endpointUrl64, 1: query64 } = params.requestSlug;

    const endpointUrl = endpointUrl64
      ? atob(decodeURIComponent(endpointUrl64))
      : '';
    const initHeaders: THeaders = Array.from(
      new URLSearchParams(searchParams).entries(),
    ).map((entry: [string, string]) => ({ key: entry[0], value: entry[1] }));
    const query = query64 ? atob(decodeURIComponent(query64)) : '';

    return (
      <GraphQlPage
        initSdlUrl={endpointUrl}
        initEndpointUrl={endpointUrl}
        initQuery={query}
        initHeaders={initHeaders}
      />
    );
  }

  return <GraphQlPage />;
};

export default Page;
