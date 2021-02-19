function checkStatus(response) {
  if (response.ok) {
    console.log("okay");
    return Promise.resolve(response);
  } else {
    console.log("not okay");
    return Promise.reject(new Error("City Not Found"));
  }
}

function getWeatherJson(response) {
  return response.json();
}

function getPrimaryWeatherInfo(weatherJson) {
  const name = weatherJson.name;
  const country = weatherJson.sys.country;
  const temperature = weatherJson.main.temp;
  const icon = weatherJson.weather[0].icon;
  const description = weatherJson.weather[0].description;

  return { name, country, temperature, icon, description };
}

export { checkStatus, getWeatherJson, getPrimaryWeatherInfo };
