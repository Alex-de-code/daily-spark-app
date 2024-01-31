const URL = import.meta.env.VITE_BASE_API_URL;

export function getAllQuotes() {
  return fetch(`${URL}quotes`)
    .then((response) => response.json())
    .then((data) => data);
}

export function getAllBackgrounds() {
  return fetch(`${URL}backgrounds`)
    .then((response) => response.json())
    .then((data) => data);
}
