var React = require('react');
var ReactDOM = require('react-dom');

var ApiUtil = require('./util/api_util.js');
var BenchStore = require('./stores/bench.js');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<div>This works</div>, document.getElementById('root'));
});
