/** @jsx React.DOM */
var rjMain = React.createClass({
  showLogin: function() {
    $(this.refs.login.getDOMNode()).show();
    $(this.refs.game.getDOMNode()).hide();
  },
  showGame: function () {
    $(this.refs.login.getDOMNode()).hide();
    $(this.refs.game.getDOMNode()).show();
  },
  componentDidMount: function() {
    this.showLogin();
  },
  render: function() {
    return (
      <div id = "app">
        
        <rjLogin ref="login" main={this} />
        <rjGame ref="game" main={this} />
      </div>);
  }
});

React.renderComponent( <rjMain /> , document.getElementById('rjMain'));