export const updateEndpointInUrl = (newEndpoint: string): void => {
  const currentUrl = window.location.href;

  const urlParts = currentUrl.split('/');

  const graphqlIndex = urlParts.indexOf('graphql');

  if (graphqlIndex === -1) {
    throw new Error('URL не соответствует ожидаемому формату с graphql');
  }

  const encodedEndpoint = btoa(newEndpoint);

  urlParts[graphqlIndex + 1] = encodedEndpoint;

  const newUrl = urlParts.join('/');

  window.history.pushState({}, '', newUrl);
};
