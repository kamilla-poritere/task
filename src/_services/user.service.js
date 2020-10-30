import config from "config";

export const userService = {
  getAll,
  getById,
};

function getAll(page) {
  const requestOptions = {
    method: "GET",
  };

  const url = page
    ? `${config.baseUrl}/users?page=${page}`
    : `${config.baseUrl}/users?per_page=1000?total_pages=1`;

  return fetch(url, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${config.baseUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
