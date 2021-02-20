function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error("City Not Found"));
  }
}

function getWeatherJson(response) {
  return response.json();
}

function getPrimaryWeatherInfo(weatherJson) {
  debugger;
  const name = weatherJson.name;
  const country = weatherJson.sys.country;
  const temperature = Math.trunc(weatherJson.main.temp);
  const icon = weatherJson.weather[0].icon;
  const description = weatherJson.weather[0].description;

  return { name, country, temperature, icon, description };
}

export { checkStatus, getWeatherJson, getPrimaryWeatherInfo };
