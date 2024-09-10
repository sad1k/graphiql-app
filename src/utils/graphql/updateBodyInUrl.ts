/* eslint-disable no-console */
const BODY_POSITION = 2;

export const updateBodyInUrl = (newBody: string) => {
  // Получаем текущий URL
  const currentUrl = window.location.href;

  // Разбиваем текущий URL на части
  const urlParts = currentUrl.split('/');

  // Находим индекс "GRAPHQL", чтобы определить положение body
  const graphqlIndex = urlParts.indexOf('graphql');

  if (graphqlIndex === -1) {
    throw new Error('URL не соответствует ожидаемому формату с GRAPHQL');
  }

  // Кодируем новое body в Base64
  const encodedBody = btoa(newBody);

  const headers = new URLSearchParams(urlParts[graphqlIndex + BODY_POSITION]);

  // Заменяем старое закодированное body на новое
  urlParts[graphqlIndex + BODY_POSITION] =
    `${encodedBody}?${headers.toString()}`;

  // Собираем новый URL
  const newUrl = urlParts.join('/');

  // Обновляем URL в строке браузера без перезагрузки страницы
  window.history.pushState({}, '', newUrl);
};
