const BODY_POSITION = 2;

export const updateBodyInUrl = (newBody: string) => {
  const currentUrl = window.location.href;

  const urlParts = currentUrl.split('/');

  const graphqlIndex = urlParts.indexOf('graphql');

  if (graphqlIndex === -1) {
    throw new Error('URL не соответствует ожидаемому формату с GRAPHQL');
  }
  const encodedBody = btoa(newBody);

  const headers = new URLSearchParams(urlParts[graphqlIndex + BODY_POSITION]);

  urlParts[graphqlIndex + BODY_POSITION] =
    `${encodedBody}?${headers.toString()}`;

  const newUrl = urlParts.join('/');

  window.history.pushState({}, '', newUrl);
};
