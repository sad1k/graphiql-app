import { GraphQlPage } from '@views/graphql/GraphQlPage/GraphQlPage';

interface IRoute {
  params?: { requestSlug: string[] };
  // searchParams?: { [key: string]: string | string[] | undefined };
}

const Page = ({ params }: IRoute) => {
  if (params?.requestSlug) {
    const { 0: endpointUrl64, 1: query64 } = params.requestSlug;

    const endpointUrl = endpointUrl64
      ? atob(decodeURIComponent(endpointUrl64))
      : '';

    const query = query64 ? atob(decodeURIComponent(query64)) : '';

    return (
      <GraphQlPage
        initSdlUrl={endpointUrl}
        initEndpointUrl={endpointUrl}
        initQuery={query}
      />
    );
  }

  return <GraphQlPage />;
};

export default Page;
