/* eslint-disable no-console */
export const updateEndpointInUrl = (newEndpoint: string): void => {
  const currentUrl = window.location.href;

  // Разбиваем текущий URL на части
  const urlParts = currentUrl.split('/');

  // Находим индекс "GRAPHQL", чтобы определить положение endpoint
  const graphqlIndex = urlParts.indexOf('graphql');

  if (graphqlIndex === -1) {
    console.error('URL не соответствует ожидаемому формату с graphql');

    return;
  }

  // Кодируем новый endpoint в Base64
  const encodedEndpoint = btoa(newEndpoint);

  // Заменяем старый закодированный endpoint на новый
  urlParts[graphqlIndex + 1] = encodedEndpoint; // Индекс сразу после "GRAPHQL"

  // Собираем новый URL
  const newUrl = urlParts.join('/');

  // Обновляем URL в строке браузера без перезагрузки страницы
  window.history.pushState({}, '', newUrl);
};
