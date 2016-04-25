var React = require('react');
var ReactDOM = require('react-dom');

// Use for testing:
// var ApiUtil = require('./util/api_util.js');
// var BenchStore = require('./stores/bench.js');

var Search = require('./components/search.jsx');
var Map = require('./components/map.jsx');
var Index = require('./components/index.jsx');



document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Search />, document.getElementById('root'));
});
