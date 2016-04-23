// We require the Store class from the flux npm module and then create a new
// store by passing in our AppDispatcher. This links the store to the
// dispatcher so it will receive actions that are dispatched.

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var BenchConstants = require('../constants/bench_constants');

var _benches = {};
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      _benches = payload.benches;
      break;
    default:

  }
};

// window.BenchStore = BenchStore; //Just for testing

module.exports = BenchStore;
