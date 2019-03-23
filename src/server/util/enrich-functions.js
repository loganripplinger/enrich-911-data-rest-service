const weather = require("./weather");

module.exports = {
  enrich: async incident => {
    const weatherEnriched = await weather.enrichWithWeather(incident);
    return weatherEnriched;
  }
};
