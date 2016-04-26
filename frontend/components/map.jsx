var React = require('react');
var BenchStore = require('../stores/bench.js');
var ClientActions = require('../actions/client_actions.js');

var Map = React.createClass({
  componentDidMount: function(){
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);

      this.map.addListener("idle", function() {
        // Need to get the bounds in the format that the backend is expecting
        var southWestLat = this.getBounds().getSouthWest().lat();
        var southWestLng = this.getBounds().getSouthWest().lng();
        var northEastLat = this.getBounds().getNorthEast().lat();
        var northEastLng = this.getBounds().getNorthEast().lng();
        var formattedBounds = {
          northEast: {lat: northEastLat, lng: northEastLng},
          southWest: {lat: southWestLat, lng: southWestLng}
        };
        ClientActions.fetchBenches(formattedBounds);
      });
      // TODO: Remove markers when they are out of view
      // When the event occurs, create markers for every bench in the array
      this.listener = BenchStore.addListener(this._onChange);
    },

  _onChange: function(){
    var benches = BenchStore.all();

    var self = this;
    benches.forEach(function (bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: self.map,
        title: 'Hello World!'
      });
    });
  },

  render: function() {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = Map;
