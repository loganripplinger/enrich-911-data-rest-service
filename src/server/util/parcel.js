const axiosQuery = require("./axios-query");

module.exports = {
  enrichWithParcel: async incident => {
    const parcelData = await getParcelData(incident);
    incident.parcel = Object.assign({}, parcelData);
    return incident;
  }
};

const getParcelData = async incident => {
  const queryString = getParcelQueryString(incident);
  const query = await axiosQuery.get(queryString);

  if (query.data) {
    return query.data;
  }
  // if err
};

const getParcelQueryString = incident => {
  const lat = incident.address.latitude;
  const long = incident.address.longitude;
  // Can probably add time to this query
  return `http://gis.richmondgov.com/ArcGIS/rest/services/StatePlane4502/Ener/MapServer/0/query?geometry=${long}%2C${lat}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&f=pjson`;
};
