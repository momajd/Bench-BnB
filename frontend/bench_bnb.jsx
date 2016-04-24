var React = require('react');
var ReactDOM = require('react-dom');

var ApiUtil = require('./util/api_util.js');
var BenchStore = require('./stores/bench.js');
var Index = require('./components/benches/index.jsx');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Index />, document.getElementById('root'));
});
