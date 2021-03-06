var React = require('react');
var BenchStore = require('../stores/bench.js');
var ClientActions = require('../actions/client_actions.js');

var Index = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  componentDidMount: function () {
    this.listener = BenchStore.addListener(this._onChange);

    // Moved to map (it doesn't make sense to fetch any markers from the API
    // until we know where the map is)
    // ClientActions.fetchBenches(); //STARTS ENTIRE PROCESS; SEE DIAGRAM
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {
    var benches = this.state.benches.map(function(bench) {
      return (<li key={bench.id}>{bench.description} </li>) ;
    });

    return (
      <ul>
        {benches}
      </ul>
    );
  }
});

module.exports = Index;
