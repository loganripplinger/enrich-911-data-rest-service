const axios = require("axios");

module.exports = {
  get: async url => {
    try {
      return await axios.get(url);
    } catch (e) {
      throw e;
    }
  }
};
