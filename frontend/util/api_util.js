var ServerActions = require('../actions/server_actions.js');

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: "api/benches",
      method: "GET",
      data: {bounds: bounds},
      success: function (benches) {
        ServerActions.receiveBenches(benches);
      },
      error: function (errors) {
        console.log(errors);
      }
    });
  }
};


// window.ApiUtil = ApiUtil; // just for testing

module.exports = ApiUtil;
