var ServerActions = require('../actions/server_actions.js');

var ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: "api/benches",
      method: "GET",
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
