const URL = import.meta.env.VITE_BASE_API_URL;

export function getAllData(dataPoint, setQuotes, setBackgrounds) {
  return fetch(`${URL}${dataPoint}`)
    .then((response) => response.json())
    .then(
      (data) =>
        dataPoint === "quotes" ? setQuotes(data) : setBackgrounds(data) //this checks if data point is equal to one of 2 endpoints, then we set the state of the respective array equal to the data for that endpoint
    );
}
