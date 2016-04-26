var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// Use for testing:
// var ApiUtil = require('./util/api_util.js');
// var BenchStore = require('./stores/bench.js');

var Search = require('./components/search.jsx');

var App = React.createClass({
  render: function(){
    debugger;
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        // router sets this variable; lets us tell react how to render
        {this.props.children}
      </div>
    );
  }
});
// this.props.children will contain all components from nested routes.

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
