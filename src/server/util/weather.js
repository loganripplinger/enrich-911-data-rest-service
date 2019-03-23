const axiosQuery = require("./axios-query");

module.exports = {
  enrichWithWeather: async incident => {
    const weatherData = await getWeatherData(incident);
    incident.weather = Object.assign({}, weatherData);
    return incident;
  }
};

const getWeatherData = async incident => {
  const queryString = getWeatherQueryString(incident);
  const query = await axiosQuery.get(queryString);

  if (query.data.currently) {
    return query.data.currently;
  }
  // if err
};

const getWeatherQueryString = incident => {
  // Reference: https://darksky.net/dev/docs#time-machine-request
  const secretKey = "9b9be38d2215d383ceda8b3edd5db12d";
  const lat = incident.address.latitude; // 37.541885
  const long = incident.address.longitude; // -77.440624
  const time = getTimeFromIncident(incident); // 2017-05-15T20:21:32-04:00

  if (lat === undefined || long === undefined || time === undefined) {
    throw "e"; // needs to be expanded
  }

  const weatherQueryString = `https://api.darksky.net/forecast/${secretKey}/${lat},${long},${time}`;
  return weatherQueryString;
};

const getTimeFromIncident = incident => {
  // Times are associated to status events.
  // We could either get all weather events for every time,
  // For now we will just get the first event's first time
  const firstKey = Object.keys(incident.apparatus[0].unit_status)[0];
  return incident.apparatus[0].unit_status[firstKey].timestamp;
};
