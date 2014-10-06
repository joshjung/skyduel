/** @jsx React.DOM */
var rjMain = React.createClass({
  showLogin: function() {
    $(this.refs.login.getDOMNode()).show();

    $(this.refs.chat.getDOMNode()).hide();
    $(this.refs.skyduel.getDOMNode()).hide();
  },
  showGame: function () {
    console.log('showing')
    $(this.refs.chat.getDOMNode()).show();
    $(this.refs.skyduel.getDOMNode()).show();
  },
  componentDidMount: function() {
    this.showLogin();
  },
  render: function() {
    return (
      <div id = "app">
        <rjLogin ref="login" main={this} />
        <rjSkydual ref="skyduel" main={this} />
        <rjChat ref="chat" main={this} />
      </div>);
  }
});

React.renderComponent( <rjMain /> , document.getElementById('rjMain'));