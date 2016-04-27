var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap-webpack');
require('jquery');

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <button type="button" class="btn btn-primary">MIAO</button>
        <button>MIAO</button>
      </div>
    )
  }
});

ReactDOM.render(
  <Hello/>, document.getElementById('container'))
