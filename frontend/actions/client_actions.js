var ApiUtil = require('../util/api_util.js');

var ClientActions = {
  fetchBenches: function() {
    ApiUtil.fetchBenches();
  }
};

module.exports = (ClientActions);
