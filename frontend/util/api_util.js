var ServerActions = require('../actions/server_actions.js');

var ApiUtil = {
  fetchAllBenches: function () {
    $.ajax({
      url: "api/benches",
      method: "GET",
      success: function (benches) {
        console.log(benches);
        ServerActions.receiveAll(benches);
      },
      error: function (errors) {
        console.log(errors);
      }
    });
  }
};


// window.ApiUtil = ApiUtil; // just for testing

module.exports = ApiUtil;
