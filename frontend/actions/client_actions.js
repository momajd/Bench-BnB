var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchBenches: function(bounds) {
    ApiUtil.fetchBenches(bounds);
  }
};

module.exports = (ClientActions);
