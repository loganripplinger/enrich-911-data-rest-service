const weather = require("./weather");
const parcel = require("./parcel");

module.exports = {
  enrich: async incident => {
    const weatherEnriched = await weather.enrichWithWeather(incident);
    const weatherAndParcelEnriched = await parcel.enrichWithParcel(
      weatherEnriched
    );
    return weatherAndParcelEnriched;
  }
};
